/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

interface ColumnCardProps {
  url: string;
  img: string;
  shop: string; //중고나라, 당근마켓, 번개장터
  title: string;
  price: string;
  location: string;
  date: string;
}

const gridContainer = css`
  background: orange;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const line_space = css`
  margin-top: 0.2rem;
`;

const innerDiv = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 12rem;
  border: 0.2rem solid;
  border-color: ${theme.colors["main-color"]};
  border-radius: 1rem;
`;

//상품 이미지
const productImg = css`
  width: 100%;
  height: 100%;
`;

//플랫폼 이름, 상품 제목, 가격, 위치
const content = css`
  margin-top: 0.5rem;
`;

export default function ColumnCard({
  url,
  img,
  shop,
  title,
  price,
  location,
  date,
}: ColumnCardProps) {
  return (
    <div css={gridContainer}>
        <div onClick={() => window.open(url)}>
          <div css={innerDiv}>
            <img css={productImg} src={img} alt="img" />
          </div>
          <div css={content}>
            <div>{shop}</div>
            <div css={line_space}>{title}</div>
            <div css={line_space}>{price}원</div>
            <div css={line_space}>{location}</div>
            <div css={line_space}>{date}</div>
          </div>
      </div>
    </div>
  );
}
