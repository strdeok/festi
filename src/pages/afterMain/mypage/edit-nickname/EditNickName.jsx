import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow, RedCloseIcon } from "../../../../style/Icons";
import Input from "../../../beforeMain/components/Input";
import { EditUserNickName } from "../../../../util/EditUserNickName";
import { CheckNickNameExist } from "../../../../util/CheckNickNameExist";

export default function EditNickName() {
  const [user, setUser] = useState({
    nickname: "닉네임",
  });

  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [state, setState] = useState(false);
  const [exist, setExist] = useState(false); // 중복존재 = true, 중복없음 = false

  const handleChangeNickname = async () => {
    await CheckNickNameExist(nickname, setExist);
    if (exist == true) {
      await EditUserNickName(nickname, navigate);
    }
  };

  useEffect(() => {
    if (nickname.length > 0) {
      setState(true);
    } else setState(false);
  }, [nickname]);

  return (
    <div className="flex flex-col h-full">
      <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackArrow />
        </div>
        <span className="mx-auto">닉네임 변경</span>
      </header>

      <p className="mt-4 font-semibold text-sm text-[#969696]">
        {user.userInfo}
      </p>

      <div className="mt-6">
        <p className="font-bold mb-3">닉네임 변경</p>
        <Input
          placeholder={"닉네임 입력"}
          input={nickname}
          setInput={setNickname}
          type={"text"}
        />
      </div>
      {exist ? (
        <p className="text-[#FC5852] text-[13px] flex flex-row items-center gap-2 mt-3">
          <RedCloseIcon />
          이미 사용 중인 닉네임입니다.
        </p>
      ) : null}
      <div className="flex-grow" />

      <div className="mb-4">
        <button
          onClick={() => {
            handleChangeNickname();
          }}
          className={`w-full rounded-full py-3 ${
            state ? "bg-yellow text-white" : "bg-gray  text-darkgray"
          }`}
          disabled={!state}
        >
          변경하기
        </button>
      </div>
    </div>
  );
}
