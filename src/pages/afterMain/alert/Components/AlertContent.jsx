import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Glass, Polaroid, RightArrow } from "../../../../style/Icons";
import axios from "axios";
import dayjs from "dayjs";

export default function AlertContent({
  alertType,
  alertConent,
  alertTime,
  read,
  alertId,
}) {
  const navigate = useNavigate();
  const modifiedAlertTime = dayjs(alertTime).format("YYYY-MM-DD HH:mm");

  const [alert, setAlert] = useState({
    icon: "",
    content: "",
  });

  // useEffect(() => {
  //   // let newAlert = { icon: "", content: "" };

  //   switch (alertType) {
  //     case "party":
  //       newAlert.icon = <Glass size={"21"} state={read} />;
  //       break;
  //     case "polaroid":
  //       newAlert.icon = <Polaroid size={"21"} state={read} />;
  //       break;
  //   }

  //   switch (alertConent) {
  //     case "주점팟 매칭 완료":
  //       newAlert.content = "주점팟 매칭이 완료되었어요.";
  //       break;
  //     case "주점팟 매칭 수정":
  //       newAlert.content = "주점팟 매칭을 수정했어요.";
  //       break;
  //     case "주점팟 매칭 등록":
  //       newAlert.content = "주점팟 매칭을 등록했어요.";
  //       break;
  //     case "폴라로이드 등록":
  //       newAlert.content = "폴라로이드를 등록했어요.";
  //       break;
  //     case "폴라로이드 수정":
  //       newAlert.content = "폴라로이드를 수정했어요.";
  //       break;
  //   }

  //   setAlert(newAlert);
  // }, [alertType, alertConent]);

  const handleIsRead = async () => {
    await axios
      .post(
        `/v1/api/alarm/${alertId}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`flex flex-row justify-between py-6 px-5 ${
        read === "true" ? "bg-[#FFFBF4]" : null
      }`}
    >
      {read === "true" ? (
        <div className="size-2 rounded bg-[#FF0000] absolute" />
      ) : null}

      <div className="flex flex-row items-center">
        <div className="size-8 mr-4 flex justify-center items-center">
          {alert.icon}
        </div>

        <div className="flex flex-col ">
          <div className="font-semibold mb-2">{alertConent}</div>
          <div className="text-darkgray">{modifiedAlertTime}</div>
        </div>
      </div>

      <button
        onClick={() => {
          handleIsRead();
          // if (alertConent === "주점팟 매칭 완료") {
          //   navigate("/matching-result");
          // }
        }}
      >
        <RightArrow width={"12"} height={"24"} />
      </button>
    </div>
  );
}
