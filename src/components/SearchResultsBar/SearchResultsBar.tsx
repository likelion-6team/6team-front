/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import stuff from "../../data/stuff.json";
import React, { useState, useCallback } from "react";
import { AiOutlineDown } from "react-icons/ai";

const resultBox = css`
  max-width: 73.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
  font-family: Inter;
  grid-gap: 2rem;
`;

const searchResult = css`
  margin-right: 1rem;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.3125rem;
  letter-spacing: -0.02rem;
  white-space: nowrap;
`;

const totalSearchResult = css`
  color: #5a5a5a;
  font-size: 1.5625rem;
  font-weight: 600;
  line-height: 1.3125rem;
  white-space: nowrap;
  margin-right: 2rem;
`;

const ArrangeByShop = css`
  width: 7.375rem;
  height: 2.875rem;

  border-radius: 0.3125rem;
  border: 2px solid ${theme.colors["--border-gray"]};
  background: ${theme.colors["white"]};

  color: #373737;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem; /* 116.667% */
  letter-spacing: -0.02rem;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const DropdownContainer = styled.button`
  width: 7.375rem;
  height: 3rem;
  background-color: ${theme.colors["white"]};
  border: 2px solid ${theme.colors["white"]};

  color: #373737;
  font-family: Noto Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem; /* 116.667% */
  letter-spacing: -0.02rem;

  text-align: center;
  align-items: center;

  margin: 0rem 0rem 0rem 15.37rem;

  &:hover {
    cursor: pointer;
  }
`;
//  정렬 방식 컨테이너
const DropdownBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${theme.colors["white"]};

  width: 7.375rem;
  height: 2.875rem;
  flex-shrink: 0;

  border-radius: 0.3125rem;
  border: 2px solid ${theme.colors["--border-gray"]};

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const DropdownSelect = styled.p`
  font-weight: bold;
`;

const DropdownMenu = styled.ul<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
  width: 7.375rem;
  height: 8.9rem;
  align-items: center;
  text-align: center;

  background-color: ${theme.colors["white"]};
  position: absolute;
  border-radius: 0.3125rem;
  border: 2px solid ${theme.colors["--border-gray"]};
`;
//옵션 선택함
const DropdownItemContainer = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  width: 7.375rem;
  height: 2.875rem;

  border-bottom: 2px solid ${theme.colors["--border-gray"]};
  border-top: none;
  border-radius: 0.3125rem;
  flex-shrink: 0;

  font-weight: 700;
  font-size: 1.125rem;

  &:hover {
    background-color: ${theme.colors["main-color"]};
    color: white;
  }
`;

const ItemName = styled.p`
  font-weight: bold;
`;
const dropdownItems = [
  { id: 1, name: "전체 보기", sortOrder: "null" },
  { id: 2, name: "저가순", sortOrder: "lowToHigh" },
  { id: 3, name: "고가순", sortOrder: "highToLow" },
];

type SortOrder = "null" | "lowToHigh" | "highToLow";

interface SearchResult {
  result: string;
}

export default function SearchResultBar({ result }: SearchResult) {
  const [selectedShop, setSelectedShop] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(stuff);
  const [isActive, setIsActive] = useState(false);
  const [item, setItem] = useState<string | null>(null);

  //버튼 누르면 가게별로 정렬
  const handleShowSelectedShop = (shop: string) => {
    setSelectedShop(shop);

    const siteProducts = stuff.filter((item) => item.site === shop);
    setFilteredProducts(siteProducts);
  };

  // 정렬방식 drop down

  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const [sortOrder, setSortOrder] = useState<
    "lowToHigh" | "highToLow" | "null"
  >("null");

  const onSelectItem = useCallback(
    (selectedItem: string, sortOrder: SortOrder) => {
      setItem(selectedItem);
      setIsActive(false);

      setSortOrder(sortOrder);
      if (sortOrder === "null") {
        setFilteredProducts(stuff);
      } else {
        const sortedProducts = [...stuff];
        // if (sortOrder === "lowToHigh") {
        //   sortedProducts.sort(
        //     (a, b) =>
        //       parseFloat(a.price.replace(/,/g, "")) -
        //       parseFloat(b.price.replace(/,/g, ""))
        //   );
        // } else {
        //   sortedProducts.sort(
        //     (a, b) =>
        //       parseFloat(b.price.replace(/,/g, "")) -
        //       parseFloat(a.price.replace(/,/g, ""))
        //   );
        // }
        setFilteredProducts(sortedProducts);
      }
    },
    []
  );

  return (
    <>
      <div css={resultBox}>
        <p css={searchResult}>검색결과</p>
        <span css={totalSearchResult}>{result}개</span>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("당근마켓")}
        >
          당근마켓
        </button>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("번개장터")}
        >
          번개장터
        </button>
        <button
          css={ArrangeByShop}
          onClick={() => handleShowSelectedShop("중고나라")}
        >
          중고나라
        </button>
        <div></div>
        <div>
          <DropdownContainer>
            <DropdownBody onClick={onActiveToggle}>
              {item ? (
                <>
                  <ItemName>{item}</ItemName>
                </>
              ) : (
                <>
                  <DropdownSelect>정렬방식</DropdownSelect>
                  <AiOutlineDown />
                </>
              )}
            </DropdownBody>
            <DropdownMenu isActive={isActive}>
              {dropdownItems.map((item) => (
                <DropdownItemContainer
                  id="item"
                  key={item.id}
                  onClick={() =>
                    onSelectItem(item.name, item.sortOrder as SortOrder)
                  }
                >
                  <ItemName id="item_name">{item.name}</ItemName>
                </DropdownItemContainer>
              ))}
            </DropdownMenu>
          </DropdownContainer>
        </div>
      </div>
    </>
  );
}
