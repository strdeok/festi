import { useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import { LogOut } from "../../../../util/LogOut";

export default function FourthSection({ agreement, setAgreement, setActive }) {
  const navigate = useNavigate()
  
  return (
    <div className="mt-6 flex flex-col gap-6">
      <p className="flex flex-row justify-between">
        개인정보 및 초상권 동의
        <SwitchButton
          agreement={agreement}
          setAgreement={setAgreement}
          setActive={setActive}
        />
      </p>
      <p onClick={()=>{
        LogOut(navigate)
      }}>로그아웃</p>
      <p onClick={()=>{
        navigate("delete-acount")
      }}>회원탈퇴</p>
    </div>
  );
}
