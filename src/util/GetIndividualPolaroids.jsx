import axios from "axios";

export const GetIndividualPolaroids = (setImages) => {
  axios
    .get("/v1/api/polaroid/search/my", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      const polaroids = res.data.data;
      polaroids.forEach((apiObejct, _i) => {
        if (apiObejct.key == "imgLink") {
          polaroids.push(apiObejct.value);
        }
      });
      setImages(polaroids);
    })
    .catch((err) => {
      console.log(err);
    });
};
