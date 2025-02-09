import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicMypage from "./components/BasicMypage";
import EditNickName from "./edit-nickname/EditNickName";

export default function Mypage() {
  const locationHook = useLocation();
  const [currentLastUrl, setCurrentLastUrl] = useState(null);
  
  useEffect(() => {
    const splitUrl = locationHook?.pathname?.split("/") ?? null;
    const location =
      splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : null;
    setCurrentLastUrl(location);
  }, [locationHook]);

  switch (currentLastUrl) {
    case "edit-nickname":
      return <EditNickName />;
    default:
      return <BasicMypage />;
  }
}
