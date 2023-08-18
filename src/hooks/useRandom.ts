import { randomApi } from "./../apis/search";
import { useQuery } from "@tanstack/react-query";
import { dataType } from "./useSearch";

interface totalRandomDatatype {
  data: dataType[];
}
export default function useRandom() {
  return useQuery<totalRandomDatatype>(["random"], () => randomApi(), {
    staleTime: 50000,
  });
}
