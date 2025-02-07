import AlertContent from "./Components/AlertContent";
import dayjs from "dayjs";

export default function AlertPage() {
  const now = dayjs().format("HH:mm");

  return (
    <div className="flex flex-col items-center">
      <header className="w-full text-center py-4 font-bold text-lg">
        알림
      </header>
      <main className="w-screen">
        <AlertContent
          alertType={"party"}
          alertConent={"주점팟 매칭 완료"}
          alertTime={now}
          read={true}
        />
        <AlertContent
          alertType={"party"}
          alertConent={"주점팟 매칭 수정"}
          alertTime={now}
        />
        <AlertContent
          alertType={"polaroid"}
          alertConent={"폴라로이드 등록"}
          alertTime={now}
        />
        <AlertContent
          alertType={"polaroid"}
          alertConent={"폴라로이드 수정"}
          alertTime={now}
        />
        <AlertContent
          alertType={"party"}
          alertConent={"주점팟 매칭 등록"}
          alertTime={now}
        />
      </main>
    </div>
  );
}