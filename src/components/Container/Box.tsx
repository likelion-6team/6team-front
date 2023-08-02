/** @jsxImportSource @emotion/react */

import React, { ReactNode } from "react";
import { css } from "@emotion/react";

const test = css`
  display: flex;
`;

export default function Box(children: ReactNode) {
  return <div css={test}>{children}</div>;
}
