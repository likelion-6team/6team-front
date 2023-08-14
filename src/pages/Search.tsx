/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Wrapper from "../components/Container/Wrapper";
import SearchResultBar from "../components/SearchResultsBar/SearchResultsBar";
import FilterModal from "../components/modal/FilterModal";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../recoil/atoms/filterClicked";
import rank from "../data/rank.json";
import RankCard from "../components/card/RankCard";
import SearchBar from "../components/searchBar/SearchBar";
import { css } from "@emotion/react";
import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import ColumnCard from "../components/card/ColumnCard";

export default function Search() {
  const setClicked = useSetRecoilState(filterClicked);
  const { stuff } = useParams();
  const { data, isLoading, isError } = useSearch(stuff!);
  console.log(data?.data);
  // const [totalStuff, setTotalStuff] = useState(data.data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p></p>;
  }

  const handleSearch = (searchTerm: string) => {
    console.log("검색:", searchTerm);
  };

  const customSearchBarStyles = {
    searchWrapper: css`
      width: 50rem;
      margin-top: 0;
    `,
    history: css`
      width: 50rem;
    `,
  };

  const topWrapper = css`
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `;
  const gridContainer = css`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 15rem);
    grid-gap: 3.4rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  `;
  return (
    <Wrapper>
      <div css={topWrapper}>
        <div>로고</div>
        <SearchBar
          onSearch={handleSearch}
          customStyles={customSearchBarStyles}
        />
        <div>필터</div>
      </div>
      <div onClick={() => setClicked((prev) => !prev)}>
        누르면 필터가 나옵니다
      </div>
      <SearchResultBar result="234335" />
      <div css={gridContainer}>
        {data?.data.map((d: any) => (
          <ColumnCard
            title={d.title}
            price={d.price}
            shop={d.site}
            url={d.url}
            location={d.region}
            img={d.image}
            date={d.date}
          />
        ))}
      </div>
      <FilterModal title="필터" />
    </Wrapper>
  );
}
