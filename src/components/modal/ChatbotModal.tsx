/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import ChatbotModalContainer from "../chatbot/ChatbotModalContainer";
import { useRecoilState } from "recoil";
import { chatBotClicked } from "../../recoil/atoms/clicked";
import ChatbotModalContentContainer from "../chatbot/ChatbotContentModalContainer";
import BotChat from "../chatbot/chat/BotChat";
import UserChat from "../chatbot/chat/UserChat";
import { useGetChatMessages } from "../../hooks/useChat";
import ChatContentsContainer from "../chatbot/ChatContentsContainer";
import { css } from "@emotion/react";

interface ChatbotModalProps {
  title: string;
}

const UserInput = css`
  padding-left: 0.5rem;
  width: 21rem;
  height: 3rem;
  border: none;
  outline: none;
  background: #f0f0f0;
  border-radius: 1rem;
  font-size: 1rem;
  margin: 0 1rem 0.7rem 0.75rem;
`;

const ChatContentWrapper = css`
  max-height: 27rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-left: 1rem; 
`;

export interface ChatData {
  type: "assistant" | "user";
  message: string;
}

export default function ChatbotModal({ title }: ChatbotModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(chatBotClicked);
  const [userInputValue, setUserInputValue] = useState<string>("");
  const { handleUserInput, isLoading, isError, messages } = useGetChatMessages(
    userInputValue,
    setUserInputValue
  );

  const useMemoMessage = useMemo(() => {
    return messages.map(({ type, message }: ChatData, index: number) =>
      type === "assistant" ? (
        <BotChat text={message} key={index} />
      ) : (
        <UserChat text={message} key={index} />
      )
    );
  }, [messages]);

  return (
    <ChatbotModalContainer
      clicked={clicked}
      setClicked={setClicked}
      title={title}
    >
      <ChatbotModalContentContainer>
      <div css={ChatContentWrapper}>
        <ChatContentsContainer>
          {useMemoMessage}
          {isLoading && <BotChat text="찾아보는 중..."></BotChat>}
          {isError && (
            <BotChat text="죄송해요! 서버가 원활하지 않아요! 다시 시도해주세요!"></BotChat>
          )}
        </ChatContentsContainer>
      </div>
        <input css = {UserInput}
          placeholder="메시지를 입력해주세요."
          type="text"
          value={userInputValue}
          onChange={(e) => setUserInputValue(e.target.value)}
          onKeyPress={handleUserInput}
        />
      </ChatbotModalContentContainer>
    </ChatbotModalContainer>
  );
}
