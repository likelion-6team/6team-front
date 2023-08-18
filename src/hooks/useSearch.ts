import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../apis/search";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AxiosError } from "axios";
import search from "../data/search.json";
import {
  avaragePrice,
  filterSite,
  maxFilter,
  maxFilterDefault,
  maxRange,
  minFilter,
  minRange,
  priceSortFilter,
} from "./../recoil/atoms/filtering";

export interface dataType {
  image: string;
  title: string;
  price: number;
  region: string;
  date: string;
  site: string;
  url: string;
  id?: number;
}

export interface totalDataType {
  filter_code: string;
  new: { new_img: string; new: string; mean: number; min: number }[];
  data?: dataType[];
}

// const fetchDummyData = async () => {
//   return search;
// };

export function useSearch(params: string) {
  const selectedSite = useRecoilValue(filterSite);
  // const setAvaragePrice = useSetRecoilState(avaragePrice);
  // const setMaxFilterDefaultValue = useSetRecoilState(maxFilterDefault);
  // const rangeMinValue = useRecoilValue(minRange);
  // const [rangeMaxValue, setRangeMaxValue] = useRecoilState(maxRange);
  const maxFilterValue = useRecoilValue(maxFilter);
  const minFilterValue = useRecoilValue(minFilter);
  const priceSortFilterValue = useRecoilValue(priceSortFilter);
  const selectedSiteFiltering = (data: dataType) => {
    if (selectedSite === null) {
      return true;
    } else {
      return selectedSite === data.site;
    }
  };

  return useQuery<totalDataType, any, totalDataType>(
    // <totalDataType, AxiosError>
    ["search", params],
    () => searchApi(params),
    // fetchDummyData,
    {
      // cacheTime: 0,
      staleTime: 5000,
      onSuccess: (data) => {
        console.log("onSuccess 일어남", data);
        // data.data?.sort((a, b) => a.price - b.price);
        // const maxPrice = data?.data
        //   ? data?.data[data.data.length - 1].price
        //   : 0;
        // setMaxFilterDefaultValue(maxPrice);
        // setRangeMaxValue(maxPrice);

        // if (data.data) {
        //   const avarageValue = Math.floor(
        //     data.data?.reduce((a, c) => a + c.price, 0) / data.data?.length
        //   );
        //   setAvaragePrice(avarageValue);
        // } else {
        //   setAvaragePrice(0);
        // }
      },
      select: (data: totalDataType) => {
        //시간순 정렬
        data?.data?.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        //가격순 정렬
        data?.data?.sort(
          priceSortFilterValue === "lowToHigh"
            ? (a, b) => a.price - b.price
            : (a, b) => b.price - a.price
        );

        let newData = { ...data };
        // newData.data = data?.data?.filter(
        //   (i) => i.price >= minFilterValue && i.price <= maxFilterValue
        // );
        // data.data = data.data?.filter(
        //   (i) => i.price >= minFilterValue && i.price <= maxFilterValue
        // );
        newData.data = newData.data?.filter((i) => selectedSiteFiltering(i));
        newData.data = newData.data?.filter(
          (i) => i.price > minFilterValue && i.price < maxFilterValue
        );
        return newData;
      },
    }
  );
}
