/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import theme from "../styles/theme";
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
      width: 47rem;
      margin-top: 0.3rem;
      margin-left: 0.5rem;
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

  const FilterTheme = css`
    text-align: center;
    width: 5rem;
    height: 2.875rem;
    flex-shrink: 0;
    margin: -0.7rem 0rem 0rem 0.5rem;
    border-radius: 0.3125rem;
    border: 2px solid ${theme.colors["--border-gray"]};
    background: ${theme.colors["white"]};
    color: #373737;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${theme.colors["main-color"]};
      color: white;
    }
  `;

  const LogoWrapper = css `
    margin-top: -0.5rem;
    margin-rignt: 2rem;
  `;

  const Logo = css `
    width: 17rem;
  `;
  return (
    <Wrapper>
      <div css={topWrapper}>
        <div css = {LogoWrapper}><img css = {Logo} src="/Images/TextLogo.png" alt="" /></div>
        <SearchBar
          onSearch={handleSearch}
          customStyles={customSearchBarStyles}
        />
        <button css={FilterTheme}>필터</button>
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
