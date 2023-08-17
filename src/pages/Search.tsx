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
import SearchMainCard from "../components/card/SearchMainCard";
import EmptyCard from "../components/card/EmptyCard";

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
      {data.filter_code === "0" ? null : <SearchResultBar result="234335" />}

      {data.filter_code === "0" ? (
        <EmptyCard />
      ) : (
        <SearchMainCard
          newImage=""
          newProduct="맥북"
          averagePrice="99999999"
          lowestPrice="99999"
        />
      )}

      {/*     {data.filter_code === "0" ? ( 
        <EmptyCard />
      ) : 
          {data.new &&
          data.new.map((d: any, index: number) => (
        <SearchMainCard
          key={index}
          newImage={d.new_img}
          newProduct={d.new}
          averagePrice={d.mean}
          lowestPrice={d.min}
        />)
        )}}   */}

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
      <FilterModal title="필터" />
    </Wrapper>
  );
}
