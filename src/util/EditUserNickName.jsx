import axios from "axios";

export const EditUserNickName = async (nickname, navigate) => {
  const JWT_TOKEN = localStorage.getItem("jwtToken");

  await axios
    .patch(
      "/v1/api/user/nickname",
      { nickname: nickname },
      {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data.success)
      res.data.success === true ? navigate("/mypage") : alert("닉네임 변경에 실패했습니다.");
    })
    .catch((err) => {
      console.log(err);
    });
};
