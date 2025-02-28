import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import SaveAuthCode from "../../util/SaveAuthCode";

export default function SendAuth() {
  const path = useLocation().search;
  const auth = path.split("=")[1];
  const navigate = useNavigate();

  const sendLogin = async () => {
    await axios
      .post(
        "/v1/api/auth/login",
        {
          code: auth,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        SaveAuthCode(res);
        navigate("/check-policy");
        if (res.data.newUser) {
          SaveAuthCode(res);
          navigate("/loading");
        } else {
          navigate("/main");
        }
      })
      .catch((err) => {
        alert("에러가 발생하였습니다. 다시 시도해주세요.")
        navigate("/login");
      });
  };

  useEffect(() => {
    if (auth) {
      sendLogin();
    } else {
      navigate("/login");
    }
  }, []);
  return <Loading />;
}
