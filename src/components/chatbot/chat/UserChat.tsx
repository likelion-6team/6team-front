/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import theme from "../../../styles/theme";

interface UserChatProps {
  text: string;
}

const UserChatStyle = css`
  padding: 0.5rem 0.5rem 0.5rem 0.7rem;
  margin: 1rem 0rem 0 8rem;
  color: white;
  background-color: ${theme.colors["main-color"]};
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 2rem;
  border-radius: 1.2rem;
  width: 12.2rem;
`;

export default function UserChat({ text }: UserChatProps) {
  const userChatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 새로운 유저 채팅이 추가될 때마다 스크롤 아래로 이동
    if (userChatRef.current) {
      userChatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [text]);

  return <div css={UserChatStyle} ref={userChatRef}>{text}</div>;
}
