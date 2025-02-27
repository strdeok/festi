import axios from "axios";

export const LogOut = (navigate) => {
  axios
    .post(
      "/v1/api/auth/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
      localStorage.removeItem("newUser");
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};
