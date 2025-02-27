import axios from "axios";

export const checkNickname = async (nickname, setExist, navigate) => {
  const JWT_TOKEN = localStorage.getItem("jwtToken");

  await axios
    .patch(
      "/v1/api/user/nickname",
      { newNickname: nickname },
      {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
          "Content-Type": "application/json", 
        },
      }
    )
    .then((res) => {
      console.log(res);
      navigate("/main");
    })
    .catch((err) => {
      console.log(err);
      setExist(true);
    });
};
