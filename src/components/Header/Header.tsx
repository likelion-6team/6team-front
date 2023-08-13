/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../../styles/theme";

const header = css`
  height: 20rem;
  flex-shrink: 0;

  background-color: ${theme.colors["main-color"]};
`;

const logo = css`
  position: relative;
  display: flex;
  top: 10%;
  left: calc(42% - 240px / 2);
  width: 27em;
  height: 15rem;
  flex-shrink: 0;
  padding: 1rem;
`;

export default function Header() {
  return (
    <div css={header}>
      <img css={logo} src="Images/logo.png" alt="logo" />
    </div>
  );
}
