import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/search`)}>누르면 search 로 가용</div>
    </>
  );
}
