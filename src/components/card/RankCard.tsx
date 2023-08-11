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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    padding: 20px;

    ${customStyles?.rankTest}
  `;

  const imgEx = css`
    width: 15rem;
    height: 11rem;
    margin-left: 1rem;
    ${customStyles?.imgEx}
  `;

  const texts = css`
    display: grid;
    grid-template-rows: repeat(2, 0.3fr);
    gap: 2px;
    padding: 30px;
    line-height: 300%;
    ${customStyles?.texts};
  `;

  const product = css`
    font-size: 1.2rem;
    font-weight: bold;

    ${customStyles?.product}
  `;

  const price = css`
    line-height: 200%;
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
          <div css={price}>
            <div>최고가: {highestPrice}</div>
            <div>최고가: {lowestPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
}
