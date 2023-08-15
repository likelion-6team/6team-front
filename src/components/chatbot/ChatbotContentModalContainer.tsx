/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactNode } from "react";

const ChatbotContentDiv = css`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface ChatbotModalContentContainerProps {
  children: ReactNode;
}

export default function ChatbotModalContentContainer({
  children,
}: ChatbotModalContentContainerProps) {
  return <div css={ChatbotContentDiv}>{children}</div>;
}
