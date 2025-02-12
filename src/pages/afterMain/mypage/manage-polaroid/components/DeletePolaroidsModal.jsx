import { useNavigate } from "react-router-dom";

export default function DeletePolaroidsModal({ image }) {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full z-10 flex items-center justify-center">
      <div className="fixed z-20 w-[304px] h-[412px] flex flex-col gap-4 items-center justify-center bg-white rounded-2xl">
        <p className="mt-8 font-bold text-lg">폴라로이드 삭제</p>
        <img
          src={image}
          alt={image}
          className="w-[139px] h-[167px] object-fill"
        />
        <p className="px-14 text-center text-[#969696] text-sm">
          폴라로이드를 삭제할 경우 복구 및 다운로드가 불가능해집니다. 삭제
          하시겠습니까?
        </p>
        <div className="px-6 mb-6 w-full flex flex-row justify-between text-sm font-semibold">
          <button
            className="py-3 px-12 border border-darkgray text-darkgray rounded-lg"
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </button>
          <button className="py-3 px-12 border border-[#FC5852] text-white bg-[#FC5852] rounded-lg">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
