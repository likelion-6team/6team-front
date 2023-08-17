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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }
  
  // 날짜 데이터 변환
  const transformedData = data.data.map((d: any) => ({
    ...d,
    formattedDate: formatDate(d.date),
  }));

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
        {transformedData.map((d: any, index: number) => (
          <ColumnCard
            key={index}
            title={d.title}
            price={d.price}
            shop={d.site}
            url={d.url}
            location={d.region}
            img={d.image}
            date={d.formattedDate} //여기를 d.date로 수정해야할지도
          />
        ))}
      </GridContainer>
      <FilterModal title="필터" />
    </Wrapper>
  );
}

// 날짜 포맷 변환 함수
// API로부터 받아오는 날짜는 20230810의 형태인데
// toLocaleDateString를 사용하려면 2023-08-10의 형태가 되어야 합니다.
// 따라서 날짜 포맷 변환 함수를 따로 작성해 주었습니다.
function formatDate(rawDate: string) {
  const year = rawDate.substr(0, 4); // 문자열의 첫 번째부터 4개의 문자열 추출 - 2023
  const month = rawDate.substr(4, 2); // 문자열의 다섯 번째부터 2개의 문자열 추출 - 08
  const day = rawDate.substr(6, 2); // 문자열의 일곱 번째부터 2개의 문자열 추출 - 10
  return `${year}-${month}-${day}`; // 2023-08-10 리턴
}
