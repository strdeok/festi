import { Link, Outlet } from "react-router-dom";
import Button from "../../../components/Button";

export default function Mypage() {
  return (
    <div>
      <header>
        <div>200000000</div>
        <p>닉네임</p>
      </header>

      <main className="flex flex-col">
        <Link to={"manage-polaroid"}>
          <Button title={"내 폴라로이드 관리"} />
        </Link>
        <Link to={"edit-profile"}>
          <Button title={"프로필 수정"} />
        </Link>
      </main>
      <Outlet />

      <footer>
        <Link to={"/"}>
          <Button title={"로그아웃"} />
        </Link>
      </footer>
    </div>
  );
}
