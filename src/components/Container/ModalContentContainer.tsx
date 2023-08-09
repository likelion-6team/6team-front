/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import theme from "../../styles/theme";

const ModalContentDiv = css`
  padding: 2rem 0;
  margin: 0 1.5rem;
  border-bottom: 1px solid ${theme.colors["--border-gray"]};
`;

interface ModalContentContainerProps {
  children: ReactNode;
}

export default function ModalContentContainer({
  children,
}: ModalContentContainerProps) {
  return <div css={ModalContentDiv}>{children}</div>;
}
