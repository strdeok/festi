import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../../../style/Icons";
import Input from "../../../beforeMain/components/Input";
import Button from "../../../../components/Button";

export default function EditNickName() {
  const [user, setUser] = useState({
    nickname: "닉네임",
    userInfo: "GDG학부 202XXXXXX ㅇㅇㅇ",
  });

  const navigate = useNavigate();
  const params = useParams();

  const [nickname, setNickname] = useState("");
  const [state, setState] = useState(false);

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
      <div className="flex-grow" />

      <div className="mb-4">
        <Button state={state} title={"변경하기"} path={`/mypage/${params.id}`} />
      </div>
    </div>
  );
}
