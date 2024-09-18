/// <reference path="../types/exim.d.ts" />

import { RequestHandler } from "express";
import { responseHandler } from "../utils/response-handler";

// Simple in-memory cache
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 60 * 60 * 1000;

// To futher optimize the data, we can use the limit and offset query parameters to fetch data in chunks
// and store the data in a more optimized format in the cache.

// TODO: Add limit and offset query parameters to fetch data in chunks

export const getExim: RequestHandler = async (req, res, next) => {
  const country = (req.query.country || "USA") as string;
  const cacheKey = `exim_${country}`;

  if (
    cache[cacheKey] &&
    Date.now() - cache[cacheKey].timestamp < CACHE_DURATION
  ) {
    return responseHandler(res).success(
      200,
      "Data from cache",
      cache[cacheKey].data
    );
  }

  const response = await fetch(
    "https://analyticsdata.indiadatahub.com/dashboards/getexim",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        exim_type: "export",
        frequency: "monthly",
      }),
    }
  );

  const result = (await response.json()) as EximData;

  if (result.message) {
    cache[cacheKey] = { data: result, timestamp: Date.now() };

    return responseHandler(res).success(200, "", result);
  }

  const childMap: { [parentId: string]: EximTableData[] } = {};
  const modifiedData: EximTableData[] = [];

  result.tabledata.forEach((item) => {
    if (!item.parent) {
      modifiedData.push({ ...item });
    } else {
      if (!childMap[item.parent]) {
        childMap[item.parent] = [];
      }
      childMap[item.parent].push({ ...item });
    }
  });

  modifiedData.forEach((parent) => {
    if (childMap[parent.title[0]]) {
      parent.subItems = childMap[parent.title[0]];
    }
  });

  const data = {
    tabledata: modifiedData,
    country: result.country,
    exim_type: result.exim_type,
    frequency: result.frequency,
  };

  cache[cacheKey] = { data, timestamp: Date.now() };

  return responseHandler(res).success(200, "Fresh data", data);
};
