import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import ColumnCard from "../card/ColumnCard";
import Box from "../Container/Box";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/search`)}>누르면 search 로 가용</div>
      <Button />
      <ColumnCard
        title="테스트입니다"
        price="200,000"
        url="https://www.naver.com"
        location="서울시 강동구"
        img="https://image.lguplus.com/common/images/hphn/product/A2628-128/imge_cut/ushop_A2628-128_67_A.jpg"
      />
    </>
  );
}
