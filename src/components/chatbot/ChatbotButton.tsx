/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";

const chatbtn = css`
  width: 10rem;
  height: 5rem;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  line-height: 180%;
  weight: bold;
  border: none;
  background-color: white;
  &:hover {
    background-color: #e7edf7;
    transition: 1s ease-in-out;
  }
  &:not(:hover) {
    transition: 1s ease-out;
  }
  box-shadow: 0.5px 0.5px 3px 0.5px grey;
  cursor: pointer;
  position: fixed;
  bottom: 3rem;
  right: 2.5rem;
  align-items: center;
  display: flex;
  padding-left: 4.5rem;
`;

const chaticon = css`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  z-index: 2;
  position: fixed;
  bottom: 4rem;
  right: 8.5rem;
`;

const chatwrapper = css`
  position: fixed;
  bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export default function ChatbotButton() {
  const setClicked = useSetRecoilState(filterClicked);
  return (
    <>
      <div css={chatwrapper}>
        {" "}
        <img
          src={"Images/chatboticon.jpg"}
          alt="chatboticon"
          css={chaticon}
        ></img>
        <button onClick={() => setClicked((prev) => !prev)} css={chatbtn}>
          맞춤형 <br></br>전자기기
        </button>
      </div>
    </>
  );
}
