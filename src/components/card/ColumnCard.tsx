/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

interface ColumnCardProps {
  url: string;
  img: string;
  title: string;
  price: string;
  location: string;
}

const test = css`
  background-color: ${theme.colors["main-color"]};

  width: 17.5rem;
  height: 22.5rem;
`;

const imgTest = css`
  width: 14.40813rem;
  height: 11.156rem;
  flex-shrink: 0;
`;

export default function ColumnCard({
  url,
  img,
  title,
  price,
  location,
}: ColumnCardProps) {
  return (
    <>
      <div onClick={() => window.open(url)} css={test}>
        <img css={imgTest} src={img} alt="img" />
        <div>{title}</div>
        <div>가격:{price}</div>
        <div>장소:{location}</div>
      </div>
    </>
  );
}
