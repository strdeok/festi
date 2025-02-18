import { useNavigate } from "react-router-dom";

export default function DeleteAcount() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full absolute px-11">
      <div
        id="background"
        className="fixed w-full h-full left-0 top-0 z-10 bg-black bg-opacity-30 backdrop-blur-[1px]"
      />

      <div className="z-20 bg-white p-6 rounded-2xl text-center w-[19rem] h-[14.3125rem] ">
        <p className="mt-2 text-lg font-bold">회원탈퇴</p>

        <p className="mt-4 px-9 text-[#969696] text-sm font-medium">
          fest!를 탈퇴할 경우 fest! 내에서의 활동 내역이 모두 삭제됩니다. 탈퇴를
          진행하시겠습니까?
        </p>

        <p className="mt-8">
          <button
            className="w-[7rem] h-11 rounded-lg border border-[#dfdfdf] text-darkgray mr-3"
            onClick={() => {
              navigate("/mypage/id");
            }}
          >
            취소
          </button>

          <button
            className="w-[7rem] h-11 rounded-lg bg-[#FC5852] text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            탈퇴
          </button>
        </p>
      </div>
    </div>
  );
}
