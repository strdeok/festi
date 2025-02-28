import axios from "axios";

export const GetAlert = async () => {
  await axios
    .get("/v1/api/alarm/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
