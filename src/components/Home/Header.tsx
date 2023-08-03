/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import theme from "../../styles/theme";

const header = css`
  height: 30rem;
  flex-shrink: 0;
  background-color: ${theme.colors["main-color"]};
`;

const logo = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44rem;
  height: 18.94581rem;
  flex-shrink: 0;
  left: calc(37.62% - 240px / 2);
  top: 6rem;
`;
const fontPath =
  "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff";

const logoFont = css`
  @font-face {
    font-family: "SEBANG_Gothic_Bold";
    src: url(${fontPath}) format("woff");
    font-weight: bold;
    font-style: normal;
  }
`;
const Font = styled.div`
  ${logoFont}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  left: calc(43% - 240px / 2);

  top: 6rem;
  width: 33.28756rem;
  height: 3.24169rem;

  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 5rem;
  font-style: normal;
  font-weight: bold;
  line-height: 1.3125rem; /* 35% */
  letter-spacing: -0.02rem;
`;

export default function Header() {
  return (
    <div css={header}>
      <img src="public/logo.png" css={logo} />
      <Font>HAN NU NET</Font>
    </div>
  );
}
