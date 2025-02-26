import axios from "axios";
import { useEffect } from "react";
import PrivacyPolicy from "./PrivacyPolicy";

export default function SendAuth() {
  const auth = localStorage.getItem("authCode");

  const sendLogin = () => {
    axios
      .post(
        "/v1/api/auth/login",
        {
          code: auth,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        return <div>성공</div>;
      })
      .catch((err) => {
        console.log(err);
        return <div>실패</div>;
      });
  };

  useEffect(() => {
    sendLogin();
  }, []);
}
