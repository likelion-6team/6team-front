/** @jsxImportSource @emotion/react */

import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

interface ModalContainerProps {
  children: ReactNode;
  clicked: boolean;
}

const ModalContainerStyle = ({ clicked }: { clicked: boolean }) => css`
  display: ${clicked ? "flex" : "none"};
  z-index: 999;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  width: 780px;
  height: 500px;
  align-items: flex-end;
  justify-content: center;
  background-color: ${theme.colors["main-color"]};
`;

const ModalContainer = ({ children, clicked }: ModalContainerProps) => (
  <div css={ModalContainerStyle({ clicked })}>{children}</div>
);

export default ModalContainer;
