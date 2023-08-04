import React from "react";
import Wrapper from "../Container/Wrapper";
<<<<<<< HEAD
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
=======
import SearchResultBar from "../SearchResultsBar/SearchResultsBar";

export default function Search() {
  return (
    <Wrapper>
      Search
      <SearchResultBar result="234335" />
>>>>>>> 1ae8a4c (feat:검색결과)
    </Wrapper>
  );
}
