/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

const footerContainer = css`
  background-color: ${theme.colors["footer-lightgrey"]};
  padding: 3rem 0 2rem 0;
  display: grid;
  place-items: center;
  margin-top: 300px;
`;

const footerLinks = css`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0 0 15rem;
`;

const footerLinkItems = css`
  display: grid;
  flex-direction: column;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
`;

const footerLinkItemsH2 = css`
  margin-bottom: 16px;
  color: ${theme.colors["footer-grey"]};
`;

const footerLinkItemsA = css`
  color: ${theme.colors["footer-darkgrey"]};
  text-decoration: none;
  margin-bottom: 8px;
  cursor: pointer;
`;

const logoContainer = css`
  max-width: 1000px;
  width: 100%;
`;

const logoWrap = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 30px auto 0 auto;
`;

const websiteRights = css`
  color: ${theme.colors["footer-blue"]};
  margin-bottom: 16px;
`;

function Footer() {
  return (
    <div css={footerContainer}>
      <div css={footerLinks}>
        <div css={footerLinkItems}>
          {/*1열*/}
          <h2 css={footerLinkItemsH2}>About Us</h2>
          <p css={footerLinkItemsA}>정우진</p>
          <p
            onClick={() => window.open("https://github.com/Hellol77", "_blank")}
            css={footerLinkItemsA}
          >
            원동현
          </p>
          <p
            onClick={() =>
              window.open("https://github.com/Kangsoyeong", "_blank")
            }
            css={footerLinkItemsA}
          >
            강소영
          </p>
          <p
            onClick={() =>
              window.open("https://github.com/KimJJRoSY", "_blank")
            }
            css={footerLinkItemsA}
          >
            김정주
          </p>
          <p css={footerLinkItemsA}>김준영</p>
          <p
            onClick={() =>
              window.open("https://github.com/daeunleeeee", "_blank")
            }
            css={footerLinkItemsA}
          >
            이다은
          </p>
        </div>

        {/*2열*/}
        <div css={footerLinkItems}>
          <h2 css={footerLinkItemsH2}>Contact Us</h2>
          <p css={footerLinkItemsA}>전화</p>
          <p css={footerLinkItemsA}>팩스</p>
          <p css={footerLinkItemsA}>카카오톡 ID</p>
          <p css={footerLinkItemsA}></p>
          <p css={footerLinkItemsA}></p>
        </div>

        {/*3열*/}
        <div css={footerLinkItems}>
          <h2 css={footerLinkItemsH2}>Social Media</h2>
          <p css={footerLinkItemsA}>Instagram</p>
          <p css={footerLinkItemsA}>Velog</p>
          <p css={footerLinkItemsA}>Tistory</p>
          <p css={footerLinkItemsA}></p>
          <p css={footerLinkItemsA}></p>
        </div>
      </div>

      <div css={logoContainer}>
        <div css={logoWrap}>
          <div></div>
          <small css={websiteRights}>HAN NU NET © 2023</small>
        </div>
      </div>
    </div>
  );
}
export default Footer;
