import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Main() {
  const userId = Math.floor(Math.random() * 10);
  return (
    <div>
      <h1>메인화면</h1>
      <Link to={"/new-polaroid"}>
        <Button title={"폴라로이드 만들기"} />
      </Link>
      <Link to={"/mypage/modify-polaroid"}>
        <Button title={"폴라로이드 수정하기"} />
      </Link>
      <Link to={"/mypage/delete-polaroid"}>
        <Button title={"폴라로이드 삭제하기"} />
      </Link>
      <Link to={`/mypage/${userId}`}>
        <Button title={"마이페이지"} />
      </Link>
    </div>
  );
}
