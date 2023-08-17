/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
}

const gridContainer = css`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 15rem);
  grid-gap: 4.5rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

export default function GridContainer({ children }: GridContainerProps) {
  return <div css={gridContainer}>{children}</div>;
}
