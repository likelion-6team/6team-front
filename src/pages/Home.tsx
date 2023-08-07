/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import RankCard from "../components/card/RankCard";
import { css } from "@emotion/react";
import Wrapper from "../components/Container/Wrapper";
import ColumnCard from "../components/card/ColumnCard";
import Header from "../components/Header/Header";
import Search from "../components/searchBar/Search";
import rank from "../data/rank.json";
import stuff from "../data/stuff.json";
const rankText = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const cards = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.1rem;
  border-radius: 1rem;
  border: 1px solid black;
  height: 30rem;
  margin: auto;
`;
export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    console.log("검색:", searchTerm);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <div
          onClick={() => {
            navigate("/search");
          }}
        >
          클릭하면 서치페이지로
        </div>
        <Search onSearch={handleSearch} />
        <div css={rankText}>실시간 랭킹</div>
        <div css={cards}>
          {rank.map(({ image, model, modelHp, modelLp, id }) => {
            return (
              <RankCard
                key={id}
                img={image}
                title={model}
                highestPrice={modelHp}
                lowestPrice={modelLp}
                url="https://web.joongna.com/product/125014218"
              />
            );
          })}
        </div>
        <div>
        <div css={rankText}>인기 매물</div>
          {stuff.map(({ image, title, price, region, date, site, url, id }) => {
            return (
              <ColumnCard
                key={id}
                title={title}
                price={price}
                shop={site}
                url={url}
                location={region}
                img={image}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}