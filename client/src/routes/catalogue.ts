import axios from "@/lib/axios";

export const getCatalogues = async () => {
  const [{ data: catalogues }, { data: categories }] = await Promise.all([
    axios.get("/catalogues"),
    axios.get("/catalogues/categories"),
  ]);

  return { catalogues, categories };
};
