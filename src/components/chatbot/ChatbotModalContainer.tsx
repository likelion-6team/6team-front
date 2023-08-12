/** @jsxImportSource @emotion/react */

import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import { SetterOrUpdater } from "recoil";
import { VscClose } from "react-icons/vsc";

interface ChatbotModalContainerProps {
  children: ReactNode;
  clicked: boolean;
  setClicked: SetterOrUpdater<boolean>;
  title: string;
}

const ModalBackGroundDiv = ({ clicked }: { clicked: boolean }) => css`
  display: ${clicked ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  padding-top: 10rem;
`;

const ModalContainerStyle = css`
  z-index: 999;
  position: fixed;
  right: 2rem;
  bottom: 9rem;
  width: 23rem;
  height: 35rem;
  align-items: flex-end;
  justify-content: center;
  background-color: ${theme.colors["white"]};
  border-radius: 1.5rem;
  box-sizing: border-box;
  border-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 15px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const ModalTitleDiv = css`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors["--border-gray"]};
`;

const ModalCloseIcon = css`
  position: absolute;
  left: 2%;
  top: 2.4%;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    background-color: ${theme.colors["--opacity-closeButton"]};
  }
`;

const ModalTitleText = css`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export default function ChatbotModalContainer({
  children,
  clicked,
  setClicked,
  title,
}: ChatbotModalContainerProps) {
  return (
    <>
      <div css={ModalBackGroundDiv({ clicked })}>
        <div css={ModalContainerStyle} onClick={(e) => e.stopPropagation()}>
          <VscClose
            css={ModalCloseIcon}
            onClick={(e) => {
              setClicked(false);
            }}
          />
          <div css={ModalTitleDiv}>
            <div css={ModalTitleText}>{title}</div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
