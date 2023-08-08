/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import RowCard from "../card/RowCard";
import stuff from "../../data/stuff.json";
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

  return (
    <>
      <div>
        검색결과 {result}개
        <button onClick={() => handleShowSelectedShop("당근마켓")}>
          당근마켓
        </button>
        <button onClick={() => handleShowSelectedShop("번개장터")}>
          번개장터
        </button>
        <button onClick={() => handleShowSelectedShop("중고나라")}>
          중고나라
        </button>
      </div>
      <div>
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
