/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export default function Footer() {
  return <div css={divStyle}>Hover to change color.</div>;
}
