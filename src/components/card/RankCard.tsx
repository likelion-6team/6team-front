/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface RankCardProps {
  url: string;
  img: string;
  title: string;
  highestPrice: string;
  lowestPrice: string;
  css?: {
    rankTest?: any;
    imgEx?: any;
    texts?: any;
    product?: any;
  };
}

export default function RankCard({
  url,
  img,
  title,
  highestPrice,
  lowestPrice,
  css: customStyles,
}: RankCardProps) {
  const rankTest = css`
    width: 33rem;
    height: 13rem;
    border-radius: 1rem;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    justify-content: center;
    align-items: center;
    ${customStyles?.rankTest}
  `;

  const imgEx = css`
    width: 15rem;
    height: 11rem;
    border-radius: 1rem;
    margin-left: 1rem;
    ${customStyles?.imgEx}
  `;

  const texts = css`
    font-size: 1rem;
    line-height: 200%;
    margin-left: 1rem;
    ${customStyles?.texts}
  `;

  const product = css`
    font-size: 1.2rem;
    font-weight: bold;
    ${customStyles?.product}
  `;

  const handleClick = () => {
    if (url) {
      window.open(url);
    }
  };
  return (
    <>
      <div onClick={handleClick} css={rankTest}>
        <img css={imgEx} src={img} alt="img" />
        <div css={texts}>
          <div css={product}>{title}</div>
          <div>최고가:{highestPrice}</div>
          <div>최고가:{lowestPrice}</div>
        </div>
      </div>
    </>
  );
}
