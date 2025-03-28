import { useLocation, useNavigate } from "react-router-dom";
import { Bell, Glass, HomeIcon, Human } from "../style/Icons";

export default function BottomNavigation() {
  const locate = useLocation();
  const navigate = useNavigate();
  const userId = "id"; // 임의 id
  return (
    <div className="text-sm fixed -bottom-1 left-0 pt-5 w-screen h-20 flex flex-row bg-white drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] z-10">

      <div
        onClick={() => {
          navigate("/main");
        }}
        className={`text-sm flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/main" ? "text-yellow" : "text-[#969696]"
        }`}
      >
        <HomeIcon state={locate.pathname === "/main" ? true : false} />홈
      </div>

      <div
        onClick={() => {
          navigate("/matching");
        }}
        className={`text-sm flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/matching" ? "text-yellow" : "text-[#969696]"
        }`}
      >
        <Glass state={locate.pathname === "/matching" ? "text-yellow" : ""} />
        주점팟 매칭
      </div>
      <div
        onClick={() => {
          navigate("/alert");
        }}
        className={`text-sm flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/alert" ? "text-yellow" : "text-[#969696]"
        }`}
      >
        <Bell state={locate.pathname === "/alert" ? true : false} />
        알림
      </div>
      <div
        onClick={() => {
          navigate(`/mypage`);
        }}
        className={`text-sm flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === `/mypage` ? "text-yellow" : "text-[#969696]"
        }`}
      >
        <Human state={locate.pathname == `/mypage`} />
        마이페이지
      </div>
    </div>
  );
}
