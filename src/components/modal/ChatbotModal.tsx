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
import ChatbotInput from "../chatbot/ChatbotInput";

interface ChatbotModalProps {
  title: string;
}


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
        <ChatbotInput />
      </ChatbotModalContentContainer>
    </ChatbotModalContainer>
  );
}
