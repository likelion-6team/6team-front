import React from "react";
import ModalContainer from "../Container/ModalContainer";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { filterClicked } from "../../recoil/atoms/clicked";
import ModalTitleText from "../text/ModalTitleText";
import MultiRangeSlider from "../input/MultiRangeSlider";
import ModalContentContainer from "../Container/ModalContentContainer";
import {
  avaragePrice,
  filterSite,
  maxFilter,
  maxRange,
  minFilter,
  minRange,
  priceSortFilter,
} from "../../recoil/atoms/filtering";

interface FilterModalProps {
  title: string;
}

export default function FilterModal({ title }: FilterModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(filterClicked);
  const avaragePriceValue = useRecoilValue(avaragePrice);
  const rangeMinValue = useRecoilValue(minRange);
  const rangeMaxValue = useRecoilValue(maxRange);
  const setMaxFilterValue = useSetRecoilState(maxFilter);
  const setMinFilterValue = useSetRecoilState(minFilter);
  const resetSelectSite = useResetRecoilState(filterSite);
  const resetPriceSortFilter = useResetRecoilState(priceSortFilter);
  return (
    <ModalContainer clicked={clicked} setClicked={setClicked} title={title}>
      <ModalContentContainer>
        <ModalTitleText
          title="가격 범위"
          subtitle={`평균 가격은 ₩${avaragePriceValue}입니다`}
        />
        <MultiRangeSlider />
      </ModalContentContainer>
      <button
        onClick={() => {
          setMaxFilterValue(rangeMaxValue);
          setMinFilterValue(rangeMinValue);
          resetSelectSite();
          resetPriceSortFilter();
          setClicked(false);
        }}
      >
        적용
      </button>
    </ModalContainer>
  );
}
