import React from "react";
import ModalContainer from "../Container/ModalContainer";
import { useRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";
import DoubleRangeSlider from "../input/DoubleRangeSlider";

// interface FilterModalProps {
//   title: string;
// }

export default function FilterModal() {
  const [clicked, setClicked] = useRecoilState<boolean>(filterClicked);
  return (
    <ModalContainer clicked={clicked} setClicked={setClicked} title={"필터"}>
      <DoubleRangeSlider />
    </ModalContainer>
  );
}
