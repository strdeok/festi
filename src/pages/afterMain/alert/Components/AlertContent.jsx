import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Glass, Polaroid, RightArrow } from "../../../../style/Icons";

export default function AlertContent({
  alertType,
  alertConent,
  alertTime,
  read,
}) {
  const navigate = useNavigate();

  const [alert, setAlert] = useState({
    icon: "",
    content: "",
  });

  useEffect(() => {
    let newAlert = { icon: "", content: "" };

    switch (alertType) {
      case "party":
        newAlert.icon = <Glass size={"21"} state={read} />;
        break;
      case "polaroid":
        newAlert.icon = <Polaroid size={"21"} state={read} />;
        break;
    }

    switch (alertConent) {
      case "주점팟 매칭 완료":
        newAlert.content = "주점팟 매칭이 완료되었어요.";
        break;
      case "주점팟 매칭 수정":
        newAlert.content = "주점팟 매칭을 수정했어요.";
        break;
      case "주점팟 매칭 등록":
        newAlert.content = "주점팟 매칭을 등록했어요.";
        break;
      case "폴라로이드 등록":
        newAlert.content = "폴라로이드를 등록했어요.";
        break;
      case "폴라로이드 수정":
        newAlert.content = "폴라로이드를 수정했어요.";
        break;
    }

    setAlert(newAlert);
  }, [alertType, alertConent]);

  return (
    <div
      className={`flex flex-row justify-between py-6 px-5 ${
        read ? "bg-[#FFFBF4]" : null
      }`}
    >
      {read ? <div className="size-2 rounded bg-[#FF0000] absolute" /> : null}

      <div className="flex flex-row items-center">
        <div className="size-8 mr-4 flex justify-center items-center">
          {alert.icon}
        </div>

        <div className="flex flex-col ">
          <div className="font-semibold mb-2">{alert.content}</div>
          <div className="text-darkgray">{alertTime}</div>
        </div>
      </div>

      <button
        onClick={() => {
          if (alertConent === "주점팟 매칭 완료") {
            navigate("/matching-result");
          }
        }}
      >
        <RightArrow width={"12"} height={"24"} />
      </button>
    </div>
  );
}
