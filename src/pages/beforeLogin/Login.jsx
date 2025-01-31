import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <input className="border-solid border-black border" type="text" />
      <input className="border-solid border-black border" type="password" />
      <Link to={"/check-policy"}>
        <Button title={"로그인"} />
      </Link>
      <Outlet />
    </div>
  );
}
