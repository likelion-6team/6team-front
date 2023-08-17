/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import internal from "stream";

interface ColumnCardProps {
  url: string;
  img: string;
  shop: string; //중고나라, 당근마켓, 번개장터
  title: string;
  price: number;
  location: string;
  date: string;
}

const line_space = css`
  margin-top: 0.2rem;
`;

const innerDiv = css`
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 12rem;
  border-radius: 0.625rem;
  border: 1px solid ${theme.colors["--border-gray"]};
  cursor: pointer; 
`;

//상품 이미지
const productImg = css`
  width: 100%;
  height: 100%;
`;

//플랫폼 이름, 상품 제목, 가격, 위치
const content = css`
  margin-top: 1rem;
  letter-spacing: -0.02rem;
  font-family: Inter;
`;

const titleCss = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3125rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const locationCss = css`
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.3125rem; /* 140% */
`;

const shopAndDate = css`
  margin-top: 0.5rem;
  color: #5a5a5a;
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.3125rem; /* 140% */
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
  const formattedPrice = price.toLocaleString(); //가격 콤마 추가

  const formattedDate = new Date(date).toLocaleDateString("ko-KR", { //년, 월, 일
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <div onClick={() => window.open(url)}>
      <div css={innerDiv}>
        <img css={productImg} src={img} alt="img" />
      </div>
      <div css={content}>
        <div css={titleCss}>{title}</div>
        <div css={line_space}>{formattedPrice}원</div>
        <div css={locationCss}>{location}</div>
        <div css={shopAndDate}>
          {shop}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {formattedDate}
        </div>
      </div>
    </div>
  );
}
