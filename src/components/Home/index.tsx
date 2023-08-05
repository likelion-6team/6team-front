import { useNavigate } from "react-router-dom";
// import Button from "../button/Button";
import RowCard from "../card/RowCard" //RowCard 추가
import Wrapper from "../Container/Wrapper";
import Search from "../searchBar/Search"

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    console.log("검색:", searchTerm);
  };

  return (
    <>
      <Wrapper>
        <Search onSearch={handleSearch} />
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
