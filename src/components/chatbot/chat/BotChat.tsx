/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";

interface BotChatProps {
  text: string;
}

const BotChatStyle = css`
  padding: 0.5rem;
  margin-top: 1rem;
  background: #f0f0f0;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 2rem;
  border-radius: 1.2rem;
  font-weight: 500;
  width: 18rem;
`;

export default function BotChat({ text }: BotChatProps) {
  const botChatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 새로운 봇 채팅이 추가될 때마다 스크롤 아래로 이동
    if (botChatRef.current) {
      botChatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [text]);

  return <div css={BotChatStyle} ref={botChatRef}>{text}</div>;
}
