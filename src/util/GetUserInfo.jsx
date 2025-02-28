import axios from "axios";

export const GetUserInfo = async (setNickname) => {
  await axios
    .get("/v1/api/user/info", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTM5OTg2MTc4IiwiaWF0IjoxNzQwNzI2ODg0LCJleHAiOjE3NDA4MTMyODR9.ebcX0vLD6oNGZ_AAzEeytK_gnHM_kWfRkd6nd1NGxng`,
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
