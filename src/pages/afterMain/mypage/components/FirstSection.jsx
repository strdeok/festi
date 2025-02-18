import { useState } from "react";
import { RightArrow } from "../../../../style/Icons";
import { useNavigate } from "react-router-dom";

export default function FirstSection() {
  const [user] = useState({
    nickname: "닉네임",
    userInfo: "GDG학부 202XXXXXX ㅇㅇㅇ",
  });

  const navigate = useNavigate();

  return (
    <div className="text-sm">
      <p className="text-xl mt-4">
        안녕하세요, <span className="font-black">{user.nickname}님!</span>
        <p>축제는 잘 즐기고 계신가요?</p>
      </p>
      <p className="mt-2">{user.userInfo}</p>
      <p
        className="font-medium flex flex-row items-center text-[#969696] mt-10 mb-7"
        onClick={() => {
          navigate("edit-nickname");
        }}
      >
        닉네임 변경
        <RightArrow width={"8"} height={"16"} />
      </p>
    </div>
  );  
}
