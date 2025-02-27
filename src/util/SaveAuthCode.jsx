import axios from "axios";

export default function SaveAuthCode(authCode) {
  localStorage.setItem("authCode", authCode);
}
