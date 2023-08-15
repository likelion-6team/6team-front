/** @jsxImportSource @emotion/react */

import React from "react";

interface BotChatProps {
  text: string;
}

export default function BotChat({ text }: BotChatProps) {
  return <div>{text}</div>;
}
