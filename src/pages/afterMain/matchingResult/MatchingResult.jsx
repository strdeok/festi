import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { BackArrow } from "../../../style/Icons";
import MatchingResultMain from "./components/MatchingResultMain";
import NoMatchingResult from "./components/NoMathcingResult";
import { GetMatchingResult } from "../../../util/GetMatchingResult";
import dayjs from "dayjs";

export default function MatchingResult() {
  const navigate = useNavigate();

  const date = ["2025-05-14", "2025-05-15", "2025-05-16"];

  const [activeDate, setActiveDate] = useState("2025-05-14");
  const [matchingData, setMatchingData] = useState([{}, {}, {}]);

  useEffect(() => {
    GetMatchingResult(setMatchingData, activeDate);
  }, []);

  const ShowingResult = () => {
    switch (activeDate) {
      case "2025-05-14":
        return matchingData[0]?.groupName ? (
          <MatchingResultMain mathchingData={matchingData[0]} />
        ) : (
          <NoMatchingResult />
        );

      case "2025-05-15":
        return matchingData[1]?.groupName ? (
          <MatchingResultMain mathchingData={matchingData[1]} />
        ) : (
          <NoMatchingResult />
        );

      case "2025-05-16":
        return matchingData[2]?.groupName ? (
          <MatchingResultMain mathchingData={matchingData[2]} />
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
            navigate(-1);
          }}
        >
          <BackArrow />
        </div>
        <span className="mx-auto">매칭결과</span>
      </header>

      <nav className="mt-6 flex flex-row gap-2">
        {date.map((data, index) => {
          const formattedData = dayjs(data).format("MM월 DD일");
          return (
            <button
              key={index}
              className={`border rounded-full px-4 py-[0.625rem] ${
                activeDate === data
                  ? "border-yellow bg-[#FFF7E8] text-yellow"
                  : "border-lightgray bg-white text-[#969696]"
              } `}
              onClick={() => {
                setActiveDate(data);
                GetMatchingResult(setMatchingData, data);
              }}
            >
              {formattedData}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 h-full">
        <ShowingResult />
      </div>

      <div className="flex-grow" />

      <div className="mb-4">
        <Button state={true} title={"확인"} path={-1} />
      </div>
    </div>
  );
}
