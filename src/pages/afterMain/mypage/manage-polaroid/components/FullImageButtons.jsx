import { useNavigate } from "react-router-dom";
import DownloadImageFile from "../../../../../util/DownloadImageFile";

export default function FullImageButtons({ image }) {
  const navigate = useNavigate();

  return (
    <div className="absolute w-full flex flex-row justify-between -bottom-16">
      <button
        className="bg-black text-white px-6 py-3 rounded-lg"
        onClick={() => {
          DownloadImageFile(image);
        }}
      >
        다운로드
      </button>
      <button
        className="bg-white text-darkgray border-gray border px-6 py-3 rounded-lg"
        onClick={() => {
          navigate("/signup-polaroid/filter-polaroid", {
            state: {
              imageUrl: image,
            },
          });
        }}
      >
        수정
      </button>
      <button
        className="bg-[#FEDEDC] text-[#FC5852] border-[#FC5852] border px-6 py-3 rounded-lg"
        onClick={() => {
          navigate("delete-polaroid");
        }}
      >
        삭제
      </button>
    </div>
  );
}
