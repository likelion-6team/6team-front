/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../../styles/theme";

const header = css`
  height: 30rem;
  flex-shrink: 0;
  background-color: ${theme.colors["main-color"]};
  text-align: center;
`;

const logo = css`
  width: 44rem;
  height: 18.94581rem;
  flex-shrink: 0;
  padding: 3rem;
`;

const font = css`
  color: ${theme.colors["white"]};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 5rem;
  font-style: normal;
  font-weight: bold;
  line-height: 1.3125rem; /* 35% */
  letter-spacing: -0.02rem;
`;

export default function Header() {
  return (
    <div css={header}>
      <img css={logo} src="Images/logo.png" />
      <div css={font}>HAN NU NET</div>
    </div>
  );
}
