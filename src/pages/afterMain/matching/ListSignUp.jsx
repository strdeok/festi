import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { BackArrow } from "../../../style/Icons";
import SignUpComplete from "./components/SignUpComplete";
import NoSignUp from "./components/NoSignUp";

export default function ListSignUp() {
  const navigate = useNavigate();

  const [active, setActive] = useState("5월 14일");

  const matchingData = [
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
      contact: [{ id:0, title:"인스타@1234" },
        { id: 1, title: "카카오톡@1234" }
      ],
    },
    { date: "5월 15일" },
    { date: "5월 16일" },
  ];

  const ShowingResult = () => {
    switch (active) {
      case "5월 14일":
        return matchingData[0].nickname ? (
          <SignUpComplete matchingData={matchingData[0]} />
        ) : (
          <NoSignUp />
        );

      case "5월 15일":
        return matchingData[1].nickname ? (
          <SignUpComplete matchingData={matchingData[1]} />
        ) : (
          <NoSignUp />
        );

      case "5월 16일":
        return matchingData[2].nickname ? (
          <SignUpComplete matchingData={matchingData[2]} />
        ) : (
          <NoSignUp />
        );
    }
  };

  return (
    <div className="flex flex-col h-full ">
      <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
        <div
          onClick={() => {
            navigate("/main/matching");
          }}
        >
          <BackArrow />
        </div>
        <span className="mx-auto">등록 내역</span>
      </header>

      <nav className="mt-6 flex flex-row gap-2">
        {matchingData.map((data, index) => {
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

      <header className="py-6 text-lg font-medium">
        <span className="font-bold ">닉네임님</span>팀의 등록 내역
      </header>

      <div className="flex flex-col gap-4 h-full">
        <ShowingResult />
      </div>

      <div className="flex-grow" />

      <div className="mb-4">
        <Button state={true} title={"확인"} path={"/matching"} />
      </div>
    </div>
  );
}
