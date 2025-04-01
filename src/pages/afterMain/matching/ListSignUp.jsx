import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import { BackArrow } from "../../../style/Icons";
import SignUpComplete from "./components/SignUpComplete";
import NoSignUp from "./components/NoSignUp";
import axios from "axios";

export default function ListSignUp() {
  const navigate = useNavigate();
  const [active, setActive] = useState("5월 14일");
  const location = useLocation();
  const [matchingData, setMatchingData] = useState([{},{},{}]);

  useEffect(() => {
    console.log(location);
    setMatchingData(location.state);
  },[])

  useEffect(() => {
    for (let i = 0; i < matchingData.length; i++) {
      if (matchingData[i].matchInfoId) {
        setActive(matchingData[i].date);
        break;
      }
    }
  }, [matchingData])


  const ShowingResult = () => {
    switch (active) {
      case "5월 14일":
        return matchingData[0].matchInfoId ? (
          <SignUpComplete matchingData={matchingData[0]} />
        ) : (
          <NoSignUp />
        );

      case "5월 15일":
        return matchingData[1].matchInfoId ? (
          <SignUpComplete matchingData={matchingData[1]} />
        ) : (
          <NoSignUp />
        );

      case "5월 16일":
        return matchingData[2].matchInfoId ? (
          <SignUpComplete matchingData={matchingData[2]} />
        ) : (
          <NoSignUp />
        );
    }
  };

  return (
    <div className="flex flex-col h-full z-0">
      <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
        <div
          onClick={() => {
            navigate("/matching");
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

      <div className="flex flex-col gap-4 h-full">
        <ShowingResult />
      </div>

      <div className="mt-8 pb-4">
        <Button state={true} title={"확인"} path={"/matching"} />
      </div>
    </div>
  );
}
