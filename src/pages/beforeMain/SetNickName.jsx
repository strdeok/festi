import Button from "../../components/Button";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow, RedCloseIcon } from "../../style/Icons";

export default function SetNickName() {
  const [state, setState] = useState(false);
  const [nickname, setNickname] = useState("");
  const [exist, setExist] = useState(true); // 중복존재 = true, 중복없음 = false

  const navigate = useNavigate();

  useEffect(() => {
    setState(nickname.length > 0);
  }, [nickname]);

  return (
    <div className="flex flex-col w-full h-full pt-4">
      <button
        className="w-5 text-2xl relative mb-10"
        onClick={() => navigate("/")}
      >
        <BackArrow />
      </button>

      <p className="text-xl font-bold mb-3">닉네임 설정</p>
      <p className="mb-6 text-[#969696] font-medium">
        fest!에서 사용할 닉네임을 입력해주세요!
      </p>

      <Input
        type="text"
        placeholder="닉네임을 입력해주세요"
        setInput={setNickname}
      />

      {exist ? (
        <p className="text-[#FC5852] text-[13px] flex flex-row items-center gap-2 mt-3">
          <RedCloseIcon />
          이미 사용 중인 닉네임입니다.
        </p>
      ) : null}

      <div className="flex-grow"></div>

      <div className="pb-5">
        <Button title="시작하기" path="/main" state={state} />
      </div>
    </div>
  );
}
