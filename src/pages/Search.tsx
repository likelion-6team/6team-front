/** @jsxImportSource @emotion/react */
import React from "react";
import Wrapper from "../components/Container/Wrapper";
import SearchResultBar from "../components/SearchResultsBar/SearchResultsBar";
import FilterModal from "../components/modal/FilterModal";
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import ColumnCard from "../components/card/ColumnCard";
import SearchHeader from "../components/Header/SearchHeader";
import GridContainer from "../components/Container/GridContainer";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../recoil/atoms/filterClicked";
import rank from "../data/rank.json";
import RankCard from "../components/card/RankCard";
import SearchBar from "../components/searchBar/SearchBar";
import { css } from "@emotion/react";

export default function Search() {
  const { stuff } = useParams();
  const { data, isLoading, isError } = useSearch(stuff!);
  //배포시 삭제
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

  return (
    <Wrapper>
      <SearchHeader />
      <SearchResultBar result="234335" />
      <GridContainer>
        {data.data &&
          data.data.map((d: any, index: number) => (
            <ColumnCard
              key={index}
              title={d.title}
              price={d.price}
              shop={d.site}
              url={d.url}
              location={d.region}
              img={d.image}
              date={d.date}
            />
          ))}
      </GridContainer>
      {data.new && <div>{data.new[0].new}</div>}
      <FilterModal title="필터" />
    </Wrapper>
  );
}
