/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import RowCard from "../card/RowCard";

interface SearchResult {
  result: string;
}

interface Data {
  url: string;
  img: string;
  shop: string;
  title: string;
  price: string;
  location: string;
}

const carrotShop: Data[] = [
  {
    title: "아이폰 11 퍼플",
    price: "500,000",
    shop: "당근마켓",
    url: "",
    location: "인천",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  },
];

const lightningShop: Data[] = [
  {
    title: "아이폰 11 퍼플",
    price: "123,2342",
    shop: "번개장터",
    url: "",
    location: "인천광역시",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  },
];

const secondHendShop: Data[] = [
  {
    title: "아이폰 11 퍼플",
    price: "123,282",
    shop: "중고나라",
    url: "",
    location: "인천광역시 부평구",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  },
];

const allShops: Data[] = [...carrotShop, ...lightningShop, ...secondHendShop];

export default function SearchResultBar({ result }: SearchResult) {
  const [selectedShop, setSelectedShop] = useState<Data[]>(allShops);
  const handleShowcarrotShop = () => {
    setSelectedShop(carrotShop);
  };
  const handleShowlightningShop = () => {
    setSelectedShop(lightningShop);
  };
  const handleShowsecondHendShop = () => {
    setSelectedShop(secondHendShop);
  };

  return (
    <>
      <div>
        검색결과 {result}개
        <button onClick={handleShowcarrotShop}>당근마켓</button>
        <button onClick={handleShowlightningShop}>번개장터</button>
        <button onClick={handleShowsecondHendShop}>중고나라</button>
      </div>
      <div>
        {selectedShop.map((item) => (
          <div key={item.shop}>
            <RowCard
              url={item.url}
              img={item.img}
              shop={item.shop}
              title={item.title}
              price={item.price}
              location={item.location}
            />
          </div>
        ))}
      </div>
    </>
  );
}
