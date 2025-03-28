import { useEffect, useState } from "react";
import AlertContent from "./Components/AlertContent";
import dayjs from "dayjs";
import { GetAlert } from "../../../util/GetAlert";

export default function AlertPage() {
  const [alertList, setAlertList] = useState([]);

  useEffect(() => {
    GetAlert(setAlertList);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <header className="w-full text-center py-4 font-bold text-lg">
        알림
      </header>

      <main className="w-screen">
        {alertList.length > 0 ? (
          alertList.map((data) => (
            <AlertContent
              key={data.alarmId} // 리스트 렌더링 시 key 추가
              alertType={data.alarmType}
              alertConent={data.alarmMsg}
              read={data.isRead}
              alertTime={data.sendTime}
              alertId={data.alarmId}
            />
          ))
        ) : (
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-darkgray">
            새로운 알림이 없습니다.
          </p>
        )}
      </main>
    </div>
  );
}
