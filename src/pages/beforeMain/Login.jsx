import { Link } from "react-router-dom";
import Title from "../../components/Title";
import LoadingBackground from "./style/LoadingBackground";
import axios from "axios";

export default function Login() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <LoadingBackground />
      <p className="text-darkgray">유니들의 축제</p>
      <Title />
      <div className="mt-28 w-full px-12 z-10">
        <button className="w-full rounded-full py-3 bg-yellow text-white">
          <Link
            to={
              "https://kauth.kakao.com/oauth/authorize?client_id=0e9c4f7b52ccaf36a3f6e27337b6b10d&redirect_uri=http://localhost:5173/loading&response_type=code"
            }
            className="block w-full"
          >
            로그인
          </Link>
        </button>
      </div>
    </div>
  );
}
