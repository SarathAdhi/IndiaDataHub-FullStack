import { RequestHandler } from "express";
import Catalogue from "../schemas/catalogue.schema";
import { responseHandler } from "../utils/response-handler";

export const getAllCatalogue: RequestHandler = async (req, res, next) => {
  const catalogue = await Catalogue.find({});

  return responseHandler(res).success(200, "", catalogue);
};

export const getAllCatalogueCategories: RequestHandler = async (
  req,
  res,
  next
) => {
  const catalogue = await Catalogue.find({});
  const categoriesMap = new Map<string, string[]>();

  catalogue.forEach((item) => {
    if (categoriesMap.has(item.Category)) {
      const previousCategories = categoriesMap.get(item.Category) || [];

      categoriesMap.set(item.Category, [
        ...previousCategories,
        item.SubCategory,
      ]);
    } else {
      categoriesMap.set(item.Category, [item.SubCategory]);
    }
  });

  const categories = Array.from(categoriesMap).map(([key, value]) => ({
    Category: key,
    SubCategories: value,
  }));

  return responseHandler(res).success(200, "", categories);
};
