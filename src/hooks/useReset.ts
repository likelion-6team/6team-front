import {
  filterSite,
  maxRange,
  minRange,
  priceSortFilter,
} from "./../recoil/atoms/filtering";
import { useResetRecoilState } from "recoil";
import { useEffect } from "react";

export default function useReset() {
  const resetPriceSortFilter = useResetRecoilState(priceSortFilter);
  const resetFilterSite = useResetRecoilState(filterSite);
  const resetMaxRange = useResetRecoilState(maxRange);
  const resetMinRange = useResetRecoilState(minRange);

  useEffect(() => {
    resetPriceSortFilter();
    resetFilterSite();
    resetMaxRange();
    resetMinRange();
  }, [resetFilterSite, resetMaxRange, resetMinRange, resetPriceSortFilter]);
}
