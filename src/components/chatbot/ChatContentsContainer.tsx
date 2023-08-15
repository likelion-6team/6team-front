/** @jsxImportSource @emotion/react */

import React, { ReactNode } from "react";
import { css } from "@emotion/react";

interface ChatContentsContainerProps {
  children: ReactNode;
}

const ChatContentsContainerDiv = css`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function ChatContentsContainer({
  children,
}: ChatContentsContainerProps) {
  return <div css={ChatContentsContainerDiv}>{children}</div>;
}
