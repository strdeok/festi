import axios from "axios";

export const EditUserNickName = async (nickname, navigate, path) => {
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
      res.data.success ? navigate(path) : alert("닉네임 변경에 실패했습니다.");
    })
    .catch((err) => {
      console.log(err);
    });
};
