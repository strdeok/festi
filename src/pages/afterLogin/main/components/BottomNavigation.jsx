import { useLocation, useNavigate } from "react-router-dom";
import {
  Bell,
  Glass,
  HomeIcon,
  Human,
} from "../../../../style/Icons";

export default function BottomNavigation() {
  const locate = useLocation();
  const navigate = useNavigate();
  const userId = "id"; // 임의 id
  console.log(locate);
  return (
    <div className={`fixed -bottom-1 left-0 pt-4 w-screen h-20 flex flex-row bg-white drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]  z-50`}>
      <div
        onClick={() => {
          navigate("/main");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <HomeIcon state={locate.pathname === "/main" ? true : false} />
        <span className={`text-sm mt-2 text-[${locate.pathname === "/main" ? "#FCAF16" : "#969696"}]`}>홈</span>
      </div>
      
      <div
        onClick={() => {
          navigate("matching");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Glass state={locate.pathname === "/main/matching" ? true : false} />
        <span className={`text-sm mt-2 text-[${locate.pathname === "/main/matching" ? "#FCAF16" : "#969696"}]`}>주점팟 매칭</span>
      </div>
      <div
        onClick={() => {
          navigate("alert");
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Bell state={locate.pathname === "/main/alert" ? true : false} />
        <span className={`text-sm mt-2 text-[${locate.pathname === "/main/alert" ? "#FCAF16" : "#969696"}]`}>알림</span>
      </div>
      <div
        onClick={() => {
          navigate(`mypage/${userId}`);
        }}
        className="flex flex-col items-center w-1/4"
      >
        <Human state={locate.pathname == `/main/mypage/${userId}`} />
        <span className={`text-sm mt-2 text-[${locate.pathname === `/main/mypage/${userId}` ? "#FCAF16" : "#969696"}]`}>마이페이지</span>
      </div>
    </div>
  );
}
