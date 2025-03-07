import axios from "axios";

export const GetEntirePolaroids = (setImages) => {
  axios
    .get("/v1/api/polaroid/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((response) => {
      const polaroids = response.data.data;
      setImages(polaroids);
    })
    .catch((err) => {
      console.log(err);
    });
};
