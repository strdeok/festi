import dayjs from "dayjs";
import "dayjs/locale/ko";

export default function MatchingResultMain({ mathchingData }) {
  dayjs.locale("ko");

  const gender = () => {
    switch (mathchingData.gender) {
      case "FEMALE":
        return "여성";
      case "MALE":
        return "남성";
      case "MIXED":
        return "혼성";
    }
  };

  const desiredGender = () => {
    switch (mathchingData.desiredGender) {
      case "FEMALE":
        return "여성";
      case "MALE":
        return "남성";
      case "MIXED":
        return "혼성";
    }
  };

  const drink = () => {
    switch (mathchingData.drink) {
      case "ONE:":
        return "1병";
      case "ONE_AND_HALF":
        return "1.5병";
      case "TWO":
        return "2병";
      case "TWO_AND_HALF":
        return "2.5병";
      case "THREE":
        return "3병";
      case "THREE_AND_HALF":
        return "3.5병";
    }
  };

  const mood = () => {
    switch (mathchingData.mood) {
      case "LONG":
        return "밤새도록";
      case "SHORT":
        return "짧고굵게";
      case "TALKING":
        return "도란도란";
    }
  };

  return (
    <>
      <header className="py-6 text-lg font-medium">
        <span className="font-bold ">{mathchingData.groupName}님</span>의 팀과
        매칭 되었어요!
      </header>
      <div className="w-full bg-white p-5 rounded-2xl shadow-md">
        <div className="px-16 mb-8">
          <img
            src={mathchingData.groupImg}
            alt="상대방 사진"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4 text-[#969696] text-[0.8125rem]">
          <p className="flex justify-between">
            본인 (팀) 성별
            <span className="text-sm font-bold text-black">{gender()}</span>
          </p>
          <p className="flex justify-between ">
            원하는 성별
            <span className="text-sm font-bold text-black">
              {desiredGender()}
            </span>
          </p>
          <p className="flex justify-between ">
            시간
            <span className="text-sm font-bold text-black">
              {dayjs(mathchingData.matchDateTime).format(
                "MM월 DD일 (ddd) HH:mm"
              )}
            </span>
          </p>
          <p className="flex justify-between ">
            평균 주량
            <span className="text-sm font-bold text-black">{drink()}</span>
          </p>
          <p className="flex justify-between ">
            원하는 인원
            <span className="text-sm font-bold text-black">
              {mathchingData.people}명
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 분위기
            <span className="text-sm font-bold text-black">{mood()}</span>
          </p>
          <p className="flex justify-between ">
            연락처
            <span className="text-sm font-bold text-black text-right">
              <p>연락처 {mathchingData.contact}</p>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
