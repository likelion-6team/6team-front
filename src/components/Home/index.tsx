import { useNavigate } from "react-router-dom";
// import Button from "../button/Button";
import RowCard from "../card/RowCard" //RowCard 추가
import Wrapper from "../Container/Wrapper";
<<<<<<< HEAD
import RowCard from "../card/RowCard";
import Header from "../Header/Header";
import Search from "../searchBar/Search"

const rankText = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const cards = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.1rem;
  border-radius: 1rem;
  border: 1px solid black;
  height: 30rem;
  margin: auto;
`;
=======
import Search from "../searchBar/Search"
>>>>>>> 04306fa (feat: 메인 화면 검색창 추가)

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    console.log("검색:", searchTerm);
<<<<<<< HEAD

  };
=======
  };

>>>>>>> 04306fa (feat: 메인 화면 검색창 추가)
  return (
    <>
      <Wrapper>
        <Search onSearch={handleSearch} />
<<<<<<< HEAD
        <div css={rankText}>실시간 랭킹</div>
        <div css={cards}>
          <RankCard
            img="https://img2.joongna.com/media/original/2023/08/02/1690959165531TTO_wYyoM.jpg?impolicy=resizeWatermark3&ftext=%EC%8B%9C%ED%95%B4"
            title="아이폰 12 미니"
            highestPrice="300,000"
            lowestPrice="180,000"
            url="https://web.joongna.com/product/125014218"
          />
        </div>
=======
        {/* <div onClick={() => navigate(`/search`)}>누르면 search 로 가용</div>
        <Button />
        <ColumnCard
          title="테스트입니다"
          price="200,000"
          url="https://www.naver.com"
          location="서울시 강동구"
          img="https://image.lguplus.com/common/images/hphn/product/A2628-128/imge_cut/ushop_A2628-128_67_A.jpg"
        /> */}

        <div>인기 매물</div> 
>>>>>>> 04306fa (feat: 메인 화면 검색창 추가)
        <div>
          <RowCard 
          title = "아이폰 11 퍼플"
          price="500,000"
          shop = "당근마켓"
          url = ""
          location = "인천광역시 부평구"
          img = "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg"
        />
        
        </div>
        
      </Wrapper>
    </>
  );
}
