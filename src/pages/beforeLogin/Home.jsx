import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>
        <Button title={"로그인하기"} />
      </Link >
    </div>
  );
}
