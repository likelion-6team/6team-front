import React from "react";
import ChatbotModalContainer from "../chatbot/ChatbotModalContainer";
import { useRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";
import ChatbotContentContainer from "../Container/ModalContentContainer";

interface ChatbotModalProps {
  title: string;
}

export default function ChatbotModal({ title }: ChatbotModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(filterClicked);
  return (
    <ChatbotModalContainer
      clicked={clicked}
      setClicked={setClicked}
      title={title}
    >
      <ChatbotContentContainer>내용</ChatbotContentContainer>
    </ChatbotModalContainer>
  );
}
