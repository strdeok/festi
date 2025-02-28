import axios from "axios";

export const GetUserInfo = async (setNickname) => {
  await axios
    .get("/v1/api/user/info", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      console.log(res);
      setNickname(res.data.nickname);
    })
    .catch((err) => {
      console.log(err);
    });
};
