import { useNavigate } from "react-router-dom";

export default function SecondSection() {
  const navigate = useNavigate()
  return <p className="my-6" onClick={()=>{
    navigate("manage-polaroid")
  }}>내 폴라로이드 관리</p>;
}
