/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import ChatbotModalContainer from "../chatbot/ChatbotModalContainer";
import { useRecoilState } from "recoil";
import { chatBotClicked } from "../../recoil/atoms/clicked";
import { css } from "@emotion/react";
import ChatbotModalContentContainer from "../chatbot/ChatbotContentModalContainer";
import BotChat from "../chatbot/chat/BotChat";
import UserChat from "../chatbot/chat/UserChat";

interface ChatbotModalProps {
  title: string;
}

interface ChatData {
  type: "assistant" | "user";
  message: string;
}

const chatBotContainer = css`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function ChatbotModal({ title }: ChatbotModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(chatBotClicked);
  const [userInputValue, setUserInputValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatData[]>([
    {
      type: "assistant",
      message:
        "당신에게 알맞는 전자기기를 추천해드릴게요. 어떤 용도로 사용하시나요",
    },
  ]);
  const handleUserInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setMessages([...messages, { type: "user", message: userInputValue }]);
      setUserInputValue("");
    }
  };

  return (
    <ChatbotModalContainer
      clicked={clicked}
      setClicked={setClicked}
      title={title}
    >
      <ChatbotModalContentContainer>
        <div css={chatBotContainer}>
          {messages.map(({ type, message }: ChatData) =>
            type === "assistant" ? (
              <BotChat text={message} />
            ) : (
              <UserChat text={message} />
            )
          )}
        </div>
        <input
          type="text"
          value={userInputValue}
          onChange={(e) => setUserInputValue(e.target.value)}
          onKeyDown={handleUserInput}
        />
      </ChatbotModalContentContainer>
    </ChatbotModalContainer>
  );
}
