import axios from "axios";

export const CheckNickNameExist = (nickname, setExist) => {
  axios
    .get(`/v1/api/user/nickname/check?nickname=${nickname}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      if (res.data.success) {
        setExist(false);
      } else setExist(true);
    })
    .catch((err) => {
      console.log(err);
    });
};
