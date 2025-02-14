import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../../../style/Icons";
import Polaroids from "../../../../components/Polaroids";
import ScrollButton from "../../../../components/ScrollButton";

export default function ManagePolaroid() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="absolute w-full left-0 px-[30px]  bg-white bg-[radial-gradient(50%_20%_at_100%_30%,rgba(1,73,154,0.1)_0%,rgba(253,253,253,0)_100%)]">
      <div className=" flex flex-col pb-24">
        <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
          <div
            onClick={() => {
              navigate(`/mypage/${params.id}`);
            }}
          >
            <BackArrow />
          </div>
          <span className="mx-auto">내 폴라로이드 관리</span>
        </header>
        <Polaroids />
        <ScrollButton bottom={"bottom-10"} />
      </div>
    </div>
  );
}
