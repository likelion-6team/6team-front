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
  overflow-y: auto; 
  overflow-x: hidden;
  
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox*/
  -ms-overflow-style: none; /* IE, Edge*/
  &::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari*/
    height: 0px;
  }
`;

export default function ChatContentsContainer({
  children,
}: ChatContentsContainerProps) {
  return <div css={ChatContentsContainerDiv}>{children}</div>;
}
