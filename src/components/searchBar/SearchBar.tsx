/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  customStyles?: {
    searchWrapper?: any;
    history?: any;
  };
}

//CSS 시작
const searchWrapper = css`
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  display: flex;
  width: 72.5rem;
  margin-bottom: 1rem;
  margin-top: -1.8rem;
  height: 3rem;
  border: 0.2rem solid;
  border-radius: 2rem;
  border-color: ${theme.colors["main-color"]};
  background-color: white;
`;

const searchInput = css`
  font-size: 1.4rem;
  width: 70rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  ::placeholder {
    color: #a9a9a9;
  }
`;

const searchButton = css`
  right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  width: 3rem;
  height: 2.5rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-right: 0.3rem;
  flex-shrink: 0;
  background-color: white;
`;

const history = css`
  background: white;
  padding-left: 1rem;
  padding-bottom: 1.1rem;
  margin-top: 0.6rem;
  border: 0.13rem solid;
  border-radius: 0.8rem;
  border-color: white;
  box-shadow: 0rem 0rem 0.5rem 0.05rem #bcbcbc;
  width: 72.5rem;
  padding-top: 0.6rem;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: -0.5rem;
  z-index: 1;
`;

const searchIcon = css`
  color: #5b5b5b;
  width: 1.3rem;
  height: 1.4rem;
`;

//여기까지 CSS

const SearchBar: React.FC<SearchProps> = ({ onSearch, customStyles }) => {
  // 검색어 상태&검색 기록 상태 초기화
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false); // 검색 기록 창 보이기 여부
  const historyRef = useRef<HTMLDivElement>(null);

  // 검색 기록이 추가될 때마다 높이 조정
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.style.height = "auto"; // 높이 초기화
      historyRef.current.style.height = `${historyRef.current.scrollHeight}px`;
    }
  }, [searchHistory]);

  // 검색어 입력 이벤트 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // 검색 버튼 클릭 이벤트 핸들러
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // 검색어가 비어있지 않은 경우 검색 동작 처리
      // 검색 동작을 위해 onSearch 함수 호출하고 검색어를 인자로 전달
      onSearch(searchTerm);
      // 검색 기록 상태를 업데이트하여 새로운 검색어를 기록에 추가
      setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);

      navigate(`/search/${searchTerm}`);
    }
  };

  // 엔터키 누를 때 검색 동작을 실행하기 위한 이벤트 핸들러
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    // 엔터키가 눌렸을 때 handleSearch 함수를 호출한 다음 검색 실행
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearchBarClick = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div>
      <div
        onClick={handleSearchBarClick}
        css={[searchWrapper, customStyles?.searchWrapper]}
      >
        <input //검색어 입력
          css={searchInput}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // 엔터키 누를 때 검색되도록 함
          placeholder="검색어를 입력하세요"
        />
        {/* 검색버튼 */}
        <button onClick={handleSearch} css={searchButton}>
          <FaSearch css={searchIcon} />
        </button>
      </div>
      {searchHistory.length > 0 &&
        isHistoryVisible && ( //검색 기록이 있는 경우에만 검색 기록 창 보여주도록 함
          <div ref={historyRef} css={[history, customStyles?.history]}>
            {/* 검색 기록 리스트 */}
            <ul>
              {searchHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default SearchBar;
