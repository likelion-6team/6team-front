/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";

interface SearchResult {
  result: string;
}

export default function SearchResultBar({ result }: SearchResult) {
  return (
    <>
      <div>
        검색결과 {result}개<button>당근마켓</button>
        <button>중고나라</button>
        <button>번개장터</button>
        <div>
          <button>정렬방식</button>
        </div>
      </div>
    </>
  );
}
