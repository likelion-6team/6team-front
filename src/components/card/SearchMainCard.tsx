/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
interface SearchMainCardProps {
  newImage: string;
  newProduct: string;
  averagePrice: string;
  lowestPrice: string;
}

const containerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin: auto;
  padding: 3rem;
  padding-left: 10rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  margin-bottom: 2.5rem;
`;

const imgStyle = css`
  display: grid;
  place-items: center;
`;

const img = css`
  width: 26rem;
  height: 15rem;
  object-fit: cover;
`;

const textStyle = css`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-column-gap: 0.1rem;
  gap: 1rem;
  margin-left: -3rem;
`;

const priceValue = css`
  grid-column: 2;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  color: ${theme.colors["main-color"]};
  font-weight: bold;
  font-size: 1.5rem;
`;

const priceText = css`
  grid-column: 1;
  margin-bottom: 0.5rem;
  min-width: 3rem;
  font-size: 1.3rem;
`;

export default function SearchMainCard({
  newImage,
  newProduct,
  averagePrice,
  lowestPrice,
}: SearchMainCardProps) {
  return (
    <>
      <div css={containerStyle}>
        <div css={imgStyle}>
          <img css={img} src={newImage} alt="img" />
        </div>
        <div css={textStyle}>
          <div css={priceText}>새상품</div>{" "}
          <div css={priceValue}>{newProduct}</div>
          <div css={priceText}>평균가</div>{" "}
          <div css={priceValue}>{averagePrice}</div>
          <div css={priceText}>최저가</div>{" "}
          <div css={priceValue}>{lowestPrice}</div>
        </div>
      </div>
    </>
  );
}
