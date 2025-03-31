import axios from "axios";


export const GetAlert = async (setAlertList) => {
  await axios
    .get("/v1/api/alarm/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((res) => {
      if (res.data.message == "조회가 완료되었습니다.") {
        setAlertList(arrangeAlertList(res.data.data));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const arrangeAlertList = (alertList) => {
  const arrangedRead = [];
  const arrangedTime = [];
  alertList.forEach((element) => {
    if (element.isRead === "true") {
      console.log(element);
      arrangedRead.push(element);
    } else if (element.isRead === "false") {
      arrangedTime.push(element);
    }
  });
  return [...arrangedRead, ...arrangedTime];
};
