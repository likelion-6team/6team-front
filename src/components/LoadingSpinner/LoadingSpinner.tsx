/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Wrapper from "../Container/Wrapper";

const loadingMessage = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem; /* 70% */
  letter-spacing: -0.02rem;
`;

export default function LoadingSpinner() {
  return (
    <>
      <Wrapper>
        <div css={loadingMessage}>
          <h1>잠시만 기다려 주세요. </h1>
          <img src="Images/spinner.gif" alt="로딩중" />
        </div>
      </Wrapper>
    </>
  );
}
