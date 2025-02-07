import { useLocation, useNavigate } from "react-router-dom";
import { Bell, Glass, HomeIcon, Human } from "../../../../style/Icons";

export default function BottomNavigation() {
  const locate = useLocation();
  const navigate = useNavigate();
  const userId = "id"; // 임의 id
  return (
    <div className="fixed -bottom-1 left-0 pt-5 w-screen h-20 flex flex-row bg-white drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <div
        onClick={() => {
          navigate("/main");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <HomeIcon state={locate.pathname === "/main" ? true : false} />홈
      </div>

      <div
        onClick={() => {
          navigate("미정");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Glass />
        주점팟 매칭
      </div>
      <div
        onClick={() => {
          navigate("alert");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Bell state={locate.pathname === "/main/alert" ? true : false} />
        알림
      </div>
      <div
        onClick={() => {
          navigate(`mypage/${userId}`);
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Human state={locate.pathname == `/main/mypage/${userId}`} />
        마이페이지
      </div>
    </div>
  );
}
