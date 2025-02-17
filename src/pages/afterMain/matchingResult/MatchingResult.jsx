import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { BackArrow } from "../../../style/Icons";
import MatchingResultMain from "./components/MatchingResultMain";
import NoMatchingResult from "./components/NoMathcingResult";

export default function MatchingResult() {
  const navigate = useNavigate();

  const [active, setActive] = useState("5월 14일");

  const mathchingData = [
    {
      date: "5월 14일",
      nickname: "닉네임",
      img: "/images/sample image (1).jpg",
      gender: "남자",
      preferredGender: "혼성",
      time: "5월 14일 (화) 19:00",
      averageAlcohol: "1병 반",
      preferredPeople: "4명",
      preferredMood: "도란도란",
      contact: {
        instagram: "@1234",
        kakaoTalk: "12qw34",
      },
    },
    { date: "5월 15일" },
    { date: "5월 16일" },
  ];

  const ShowingResult = () => {
    switch (active) {
      case "5월 14일":
        return mathchingData[0].nickname ? (
          <MatchingResultMain mathchingData={mathchingData[0]} />
        ) : (
          <NoMatchingResult />
        );

      case "5월 15일":
        return mathchingData[1].nickname ? (
          <MatchingResultMain mathchingData={mathchingData[1]} />
        ) : (
          <NoMatchingResult />
        );

      case "5월 16일":
        return mathchingData[2].nickname ? (
          <MatchingResultMain mathchingData={mathchingData[2]} />
        ) : (
          <NoMatchingResult />
        );
    }
  };

  return (
    <div className="flex flex-col h-full ">
      <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
        <div
          onClick={() => {
            navigate("/alert");
          }}
        >
          <BackArrow />
        </div>
        <span className="mx-auto">매칭결과</span>
      </header>

      <nav className="mt-6 flex flex-row gap-2">
        {mathchingData.map((data, index) => {
          return (
            <button
              key={index}
              className={`border rounded-full px-4 py-[0.625rem] ${
                active === data.date
                  ? "border-yellow bg-[#FFF7E8] text-yellow"
                  : "border-lightgray bg-white text-[#969696]"
              } `}
              onClick={() => {
                setActive(data.date);
              }}
            >
              {data.date}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 h-full">
        <ShowingResult />
      </div>

      <div className="flex-grow" />

      <div className="mb-4">
        <Button state={true} title={"확인"} path={"/alert"} />
      </div>
    </div>
  );
}
