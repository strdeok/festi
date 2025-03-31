import axios from "axios";

export const DeletePolarod = (image, setFullimage) => {
  axios
    .delete(`/v1/api/polaroid/delete/${image.polaroidId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      console.log(res);
      setFullimage(null)
    })
    .catch((err) => console.log(err));
};
