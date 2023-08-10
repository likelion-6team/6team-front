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
}

const background = css`
  display: inline-block;
  margin-right: 2.09rem;
  margin-left: 1.2rem;
  margin-bottom: 1rem;
  width: 15.14rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const space = css`
  width: 0.5rem;
`;

const line_space = css`
  margin-top: 0.2rem;
`;

const innerDiv = css`
  display: flex;
  justify-content: center;
  width: 15rem;
  border: 0.14rem solid;
  border-color: ${theme.colors["main-color"]};
  border-radius: 1rem;
`;

//상품 이미지
const productImg = css`
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
`;

//플랫폼 이름, 상품 제목, 가격, 위치
const content = css`
  margin-left: 2rem;
  margin-top: 0.5rem;
`;

export default function ColumnCard({
  url,
  img,
  shop,
  title,
  price,
  location,
}: ColumnCardProps) {
  return (
    <>
      <div css={background}>
        <div onClick={() => window.open(url)}>
            <div css={innerDiv}>
              <img css={productImg} src={img} alt="img" />
            </div>
            <div css={content}>
              <div>{shop}</div>
              <div css={line_space}>{title}</div>
              <div css={line_space}>{price}원</div>
              <div css={line_space}>{location}</div>
            </div>
        </div>
        <div css={space}></div>
      </div>
    </>
  );
}