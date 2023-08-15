import React from "react";
import ModalContainer from "../Container/ModalContainer";
import { useRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/clicked";
import ModalTitleText from "../text/ModalTitleText";
import MultiRangeSlider from "../input/MultiRangeSlider";
import ModalContentContainer from "../Container/ModalContentContainer";

interface FilterModalProps {
  title: string;
}

export default function FilterModal({ title }: FilterModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(filterClicked);
  const averagePrice = "100,000";
  return (
    <ModalContainer clicked={clicked} setClicked={setClicked} title={title}>
      <ModalContentContainer>
        <ModalTitleText
          title="가격 범위"
          subtitle={`평균 가격은 ₩${averagePrice}입니다`}
        />
        <MultiRangeSlider />
      </ModalContentContainer>
    </ModalContainer>
  );
}
