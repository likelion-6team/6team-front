/** @jsxImportSource @emotion/react */

import React from "react";
import theme from "../../styles/theme";
import { css } from "@emotion/react";

interface ModalTitleTextProps {
  title: string;
  subtitle?: string;
}

const titleTextDiv = css`
  margin-bottom: 2rem;
`;

const titleDiv = css`
  font-size: 1.3rem;
  font-weight: 500;
`;

const subTitleDiv = css`
  padding-top: 0.5rem;
  color: ${theme.colors["--sub-textColor"]};
`;

export default function ModalTitleText({
  title,
  subtitle,
}: ModalTitleTextProps) {
  return (
    <div css={titleTextDiv}>
      <div css={titleDiv}>{title}</div>
      {subtitle ? <div css={subTitleDiv}>{subtitle}</div> : <></>}
    </div>
  );
}
