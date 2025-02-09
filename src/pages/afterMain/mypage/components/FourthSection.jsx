import { useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";

export default function FourthSection({ agreement, setAgreement,active, setActive }) {
  const navigate = useNavigate()
  return (
    <p className="mt-6 mb-28">
      <div className="mb-6 flex flex-row justify-between">
        개인정보 및 초상권 동의{" "}
        <SwitchButton
          agreement={agreement}
          setAgreement={setAgreement}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="mb-6">로그아웃</div>
      <div onClick={()=>{
        navigate("delete-acount")
      }}>회원탈퇴</div>
    </p>
  );
}
