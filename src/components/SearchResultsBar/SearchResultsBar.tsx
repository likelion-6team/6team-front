/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import ColumnCard from "../card/ColumnCard";
import stuff from "../../data/stuff.json";

const searchResult = css`
  color: #000;
  text-align: left;
  font-family: Inter;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem; /* 70% */
  letter-spacing: -0.02rem;
`;

const totalSearchResult = css`
  color: #5a5a5a;
  text-align: center;
  font-family: Inter;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem; /* 84% */
  letter-spacing: -0.02rem;
`;

const ArrangeByShop = css`
  text-align: center;
  width: 7.375rem;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.38);

  color: #000;
  font-family: Noto Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem; /* 116.667% */
  letter-spacing: -0.02rem;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const sortingMethod = css`
  text-align: center;
  width: 11.4375rem;
  height: 3.4375rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 2px solid rgba(12, 46, 100, 0.57);
  background: #f7f7f7;

  color: #373737;
  font-family: Inter;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 128% */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const optionCss = css`
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;
import RowCard from "../card/ColumnCard";

interface SearchResult {
  result: string;
}

export default function SearchResultBar({ result }: SearchResult) {
  const [selectedShop, setSelectedShop] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(stuff);

  const handleShowSelectedShop = (shop: string) => {
    setSelectedShop(shop);

    const siteProducts = stuff.filter((item) => item.site === shop);
    setFilteredProducts(siteProducts);
  };

  // 정렬방식 drop down
  const [sortOrder, setSortOrder] = useState<
    "lowToHigh" | "highToLow" | "null"
  >("null");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = event.target.value as
      | "lowToHigh"
      | "highToLow"
      | "null";
    setSortOrder(selectedSortOrder);

    if (selectedSortOrder === "null") {
      setFilteredProducts(stuff);
    } else {
      const sortedProducts = [...filteredProducts];
      if (selectedSortOrder === "lowToHigh") {
        sortedProducts.sort(
          (a, b) =>
            parseFloat(a.price.replace(/,/g, "")) -
            parseFloat(b.price.replace(/,/g, ""))
        );
      } else {
        sortedProducts.sort(
          (a, b) =>
            parseFloat(b.price.replace(/,/g, "")) -
            parseFloat(a.price.replace(/,/g, ""))
        );
      }

      setFilteredProducts(sortedProducts);
    }
  };

  return (
    <>
      <div>
        <p css={searchResult}>
          검색결과
          <span css={totalSearchResult}>{result}개</span>
        </p>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("당근마켓")}
        >
          당근마켓
        </button>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("번개장터")}
        >
          번개장터
        </button>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("중고나라")}
        >
          중고나라
        </button>
      </div>
      <div>
        <div>
          <select
            css={sortingMethod}
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="null">정렬방식</option>
            <option css={optionCss} value="null">
              전체보기
            </option>
            <option css={optionCss} value="lowToHigh">
              저가순
            </option>
            <option css={optionCss} value="highToLow">
              고가순
            </option>
          </select>
        </div>
        {filteredProducts.map((item) => (
          <div key={item.id}>
            <RowCard
              url={item.url}
              img={item.image}
              shop={item.site}
              title={item.title}
              price={item.price}
              location={item.region}
            />
          </div>
        ))}
      </div>
    </>
  );
}
