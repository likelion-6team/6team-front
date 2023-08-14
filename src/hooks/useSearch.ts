import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../apis/search";

export function useSearch(params: string) {
  return useQuery(["search", params], () => searchApi(params));
}
