import axios from "@/lib/axios";
import { defer, LoaderFunctionArgs } from "react-router-dom";

export const fetchExim = async (x: LoaderFunctionArgs<any>) => {
  const country = new URL(x.request.url).searchParams.get("country") || "USA";

  const { data } = await axios.get(`/exim?country=${country}`);

  return data;
};

export const getExim = async (x: LoaderFunctionArgs<any>) => {
  return defer({ data: fetchExim(x) });
};
