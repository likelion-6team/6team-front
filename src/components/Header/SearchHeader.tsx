/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import SearchBar from "../searchBar/SearchBar";
import theme from "../../styles/theme";
import { useSetRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/clicked";
import { useNavigate } from "react-router-dom";

const topWrapper = css`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const LogoWrapper = css`
  margin-top: -0.5rem;
  margin-right: 2rem;
`;

const Logo = css`
  width: 17rem;
`;

const FilterTheme = css`
  text-align: center;
  width: 5rem;
  height: 2.875rem;
  flex-shrink: 0;
  margin: -0.7rem 0rem 0rem 0.5rem;
  border-radius: 0.3125rem;
  border: 2px solid ${theme.colors["--border-gray"]};
  background: ${theme.colors["white"]};
  color: #373737;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const customSearchBarStyles = {
  searchWrapper: css`
    width: 47rem;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  `,
  history: css`
    width: 50rem;
  `,
};

export default function SearchHeader() {
  const setClicked = useSetRecoilState(filterClicked);
  const navigate = useNavigate();
  //검색 테스트
  const handleSearch = (searchTerm: string) => {
    console.log("검색:", searchTerm);
  };

  return (
    <div css={topWrapper}>
      <div css={LogoWrapper} onClick={() => navigate("/")}>
        <img css={Logo} src="/Images/TextLogo.png" alt="" />
      </div>
      <SearchBar onSearch={handleSearch} customStyles={customSearchBarStyles}/>
      <button onClick={() => setClicked(true)} css={FilterTheme}>
        필터
      </button>
    </div>
  );
}
