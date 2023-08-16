/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import empty from "./empty.jpg";

const emptyImg = css`
  margin-top: 5rem;
  margin-bottom: 2rem;
  width: 12rem;
  height: 12rem;
`;

const emptyText = css`
  font-size: 1.5rem;
`;

const linkToMain = css`
  margin-top: 2rem;
  cursor: pointer;
  width: 9rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fafafa;
  padding: 10px;
  box-shadow: 0px 0.1px 1px 0px lightgrey;
  font-weight: bold;
`;

const emptyContainer = css`
  display: grid;
  place-items: center;
  gap: 2rem;
`;

export default function EmptyCard() {
  const movePage = useNavigate();

  function gohome() {
    movePage("/");
  }
  return (
    <>
      <div css={emptyContainer}>
        <img css={emptyImg} src={empty} alt="img" />
        <div css={emptyText}>요청하신 상품을 찾을 수 없습니다.</div>
        <div css={emptyText}>이용에 불편을 드려 죄송합니다.</div>
        <div onClick={gohome} css={linkToMain}>
          메인페이지로 이동
        </div>
      </div>
    </>
  );
}
