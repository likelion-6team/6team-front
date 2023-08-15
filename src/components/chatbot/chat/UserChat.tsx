/** @jsxImportSource @emotion/react */

import React from "react";

interface UserChatProps {
  text: string;
}

export default function UserChat({ text }: UserChatProps) {
  return <div>{text}</div>;
}
