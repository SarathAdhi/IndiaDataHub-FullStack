"use strict";
/// <reference path="../types/exim.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExim = void 0;
const response_handler_1 = require("../utils/response-handler");
// Simple in-memory cache
const cache = {};
const CACHE_DURATION = 60 * 60 * 1000;
// To futher optimize the data, we can use the limit and offset query parameters to fetch data in chunks
// and store the data in a more optimized format in the cache.
// TODO: Add limit and offset query parameters to fetch data in chunks
const getExim = async (req, res, next) => {
    const country = (req.query.country || "USA");
    const cacheKey = `exim_${country}`;
    if (cache[cacheKey] &&
        Date.now() - cache[cacheKey].timestamp < CACHE_DURATION) {
        return (0, response_handler_1.responseHandler)(res).success(200, "Data from cache", cache[cacheKey].data);
    }
    const response = await fetch("https://analyticsdata.indiadatahub.com/dashboards/getexim", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country,
            exim_type: "export",
            frequency: "monthly",
        }),
    });
    const result = (await response.json());
    if (result.message) {
        cache[cacheKey] = { data: result, timestamp: Date.now() };
        return (0, response_handler_1.responseHandler)(res).success(200, "", result);
    }
    const childMap = {};
    const modifiedData = [];
    result.tabledata.forEach((item) => {
        if (!item.parent) {
            modifiedData.push({ ...item });
        }
        else {
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
    return (0, response_handler_1.responseHandler)(res).success(200, "Fresh data", data);
};
exports.getExim = getExim;
//# sourceMappingURL=exim.controllers.js.map