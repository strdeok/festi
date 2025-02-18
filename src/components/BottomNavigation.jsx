import { useLocation, useNavigate } from "react-router-dom";
import { Bell, Glass, HomeIcon, Human } from "../style/Icons";

export default function BottomNavigation() {
  const locate = useLocation();
  const navigate = useNavigate();
  const userId = "id"; // 임의 id
  return (
    <div className="fixed bottom-0 left-0 pt-5 w-screen h-20 flex flex-row bg-white drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <div
        onClick={() => {
          navigate("/main");
        }}
        className={`flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/main" ? "text-yellow" : ""
        }`}
      >
        <HomeIcon state={locate.pathname === "/main" ? true : false} />홈
      </div>

      <div
        onClick={() => {
          navigate("/미정");
        }}
        className={`flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/미정" ? "text-yellow" : ""
        }`}
      >
        <Glass />
        주점팟 매칭
      </div>
      <div
        onClick={() => {
          navigate("alert");
        }}
        className={`flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === "/alert" ? "text-yellow" : ""
        }`}
      >
        <Bell state={locate.pathname === "/alert" ? true : false} />
        알림
      </div>
      <div
        onClick={() => {
          navigate(`mypage/${userId}`);
        }}
        className={`flex flex-col gap-2 items-center w-1/4 ${
          locate.pathname === `/mypage/${userId}` ? "text-yellow" : ""
        }`}
      >
        <Human state={locate.pathname == `/mypage/${userId}`} />
        마이페이지
      </div>
    </div>
  );
}
