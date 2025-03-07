import axios from "axios";

export const GetIndividualPolaroids = (setImages) => {
  axios
    .get("/v1/api/polaroid/search/my", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      if (res.data.message !== "검색된 결과가 없습니다.") {
        const polaroids = res.data.data;
        setImages(polaroids);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
