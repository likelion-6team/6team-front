import React from "react";
import Wrapper from "../Container/Wrapper";
import FilterModal from "../modal/FilterModal";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";
import RankCard from "../card/RankCard";

export default function Search() {
  const setClicked = useSetRecoilState(filterClicked);
  return (
    <Wrapper>
      <div onClick={() => setClicked((prev) => !prev)}>
        누르면 필터가 나옵니다
      </div>
      <FilterModal title="필터" />

      <div>
        <RankCard
          img="https://img2.joongna.com/media/original/2023/08/02/1690959165531TTO_wYyoM.jpg?impolicy=resizeWatermark3&ftext=%EC%8B%9C%ED%95%B4"
          title="아이폰 12 미니"
          highestPrice="300,000"
          lowestPrice="180,000"
          url=""
          isEnlarged
        />
      </div>
    </Wrapper>
  );
}
