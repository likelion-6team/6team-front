/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const wrapperDiv = css`
  margin: auto;
  max-width: 73.75rem;
`;

export default function Wrapper({ children }: WrapperProps) {
  return <div css={wrapperDiv}>{children}</div>;
}
