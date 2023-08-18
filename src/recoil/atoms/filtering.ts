import {
  SiteFilterNameType,
  SortOrder,
} from "./../../components/SearchResultsBar/SearchResultsBar";
import { atom } from "recoil";

const max = 5000000;

export const filterSite = atom<SiteFilterNameType>({
  key: "filterSite",
  default: null,
});

export const maxFilter = atom<number>({
  key: "maxFilter",
  default: max,
});

export const minFilter = atom<number>({
  key: "minFilter",
  default: 0,
});

export const maxFilterDefault = atom<number>({
  key: "maxFilterDefault",
  default: max,
});
export const maxRange = atom<number>({
  key: "maxRange",
  default: max,
});

export const minRange = atom<number>({
  key: "minRange",
  default: 0,
});

export const avaragePrice = atom<number>({
  key: "avaragePrice",
  default: 0,
});

export const priceSortFilter = atom<SortOrder>({
  key: "priceSortFilter",
  default: "lowToHigh",
});
