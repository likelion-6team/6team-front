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
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function Search() {
  const { stuff } = useParams();
  const { data, isLoading, isError } = useSearch(stuff!);
  //배포시 삭제
  console.log(data?.data);

  // const [totalStuff, setTotalStuff] = useState(data.data);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p></p>;
  }

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
