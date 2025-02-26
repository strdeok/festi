import Button from "../../components/Button";
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
        <Button
          title={"로그인"}
          path={"/check-policy"}
          state={true}
          data={null}
        />
      </div>
    </div>
  );
}
