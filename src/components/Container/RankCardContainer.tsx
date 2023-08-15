/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactNode } from "react";

interface RankCardContainerProps {
  children: ReactNode;
}

const rankCardContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.1rem;
  border-radius: 1rem;
  height: 30rem;
  margin: auto;
`;

export default function RankCardContainer({
  children,
}: RankCardContainerProps) {
  return <div css={rankCardContainer}>{children}</div>;
}
