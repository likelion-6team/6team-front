/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

interface RankCardProps {
  img: string;
  title: string;
  highestPrice: string;
  lowestPrice: string;
}
const rankTest = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
  margin-bottom: 10px;
  height: 6rem;
`;
const imgCss = css`
  object-fit: cover;

  border-radius: 0.625rem;
  height: 90%;
`;
const texts = css`
  display: grid;
  grid-template-rows: repeat(2, 0.3fr);
  grid-gap: 5px;
  padding: 30px;
  line-height: 300%;
  padding-top: 2.5rem;
`;

const product = css`
  font-size: 1.2rem;
  font-weight: bold;
`;

const price = css`
  line-height: 200%;
`;
export default function RankCard({
  img,
  title,
  highestPrice,
  lowestPrice,
}: RankCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${title}`);
  };
  return (
    <>
      <div onClick={handleClick} css={rankTest}>
        <img css={imgCss} src={img} alt="img" />
        <div css={texts}>
          <div css={product}>{title}</div>
          <div css={price}>
            <div>최고가: {highestPrice}</div>
            <div>최저가: {lowestPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
}
