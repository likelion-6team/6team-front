import React from "react";
import Wrapper from "../Container/Wrapper";
import FilterModal from "../modal/FilterModal";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";

export default function Search() {
  const setClicked = useSetRecoilState(filterClicked);
  return (
    <Wrapper>
      <div onClick={() => setClicked((prev) => !prev)}>
        누르면 필터가 나옵니다
      </div>
      <FilterModal title="필터" />
    </Wrapper>
  );
}
