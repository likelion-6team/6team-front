/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

interface RowCardProps {
  url: string;
  img: string;
  shop: string; //중고나라, 당근마켓, 번개장터
  title: string;
  price: string;
  location: string;
}

const background = css`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors["light-gray"]};
  width: 75rem;
  height: 22.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const space = css `
  width: 0.5rem;
`;

const line_space = css `
  margin-top: 0.2rem;
`;

const outerDiv = css`
    margin-top: 1rem;
    width: 18rem;
    height: 20rem;
    border: 0.13rem solid;
    border-radius: 0.8rem;
    border-color: ${theme.colors["main-color"]};
`;

const innerDiv = css `
    display: flex;
    justify-content : center;
    width: 16rem;
    margin-top: 1rem;
    margin-left: 0.9rem;
    border: 0.13rem solid;
    border-color: ${theme.colors["main-color"]};
    border-radius: 2rem;
`;

//상품 이미지
const productImg = css`
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
`;

//플랫폼 이름, 상품 제목, 가격, 위치
const content = css `
    margin-left: 2rem;
    margin-top: 0.5rem;
`;

const popularProduct = css `
font-size: 1.8rem;
font-weight: bold;
`;

export default function RowCard({
  url,
  img,
  shop,
  title,
  price,
  location,
}: RowCardProps) {
  return (
    <>
    <div css={popularProduct}>인기 매물</div>
    <div css={background}>
      <div onClick={() => window.open(url)}>
        <div css={outerDiv}> 
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
      </div>
      <div css={space}></div>       
    </div> 
    </>
  );
}
