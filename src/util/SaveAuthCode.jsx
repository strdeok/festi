
export default function SaveAuthCode(authCode) {
  localStorage.setItem("jwtToken", authCode.data.jwtToken);
  localStorage.setItem("newUser", authCode.data.newUser);

}
