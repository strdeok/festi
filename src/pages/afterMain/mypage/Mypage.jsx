import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicMypage from "./components/BasicMypage";
import EditNickName from "./edit-nickname/EditNickName";
import getLastPath from "../../../util/GetLastPath";

export default function Mypage() {
  const location = useLocation();
  const [currentLastUrl, setCurrentLastUrl] = useState(null);

  useEffect(() => {
    setCurrentLastUrl(getLastPath);
  }, [location]);

  switch (currentLastUrl) {
    case "edit-nickname":
      return <EditNickName />;
    default:
      return <BasicMypage />;
  }
}
