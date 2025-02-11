import dayjs from "dayjs";
import Button from "../../../components/Button";
import { BackArrow, DownIcon, UpIcon } from "../../../style/Icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MatchingResult() {
  const today = dayjs().format("M월 D일");
  const navigate = useNavigate();

  const [matchingResult, setMatchingResult] = useState([
    {
      nickname: "닉네임1",
      gender: "남성",
      alcohol: "1병 반",
      mood: "도란도란",
      contact: "인스타: instagram",
    },
    {
      nickname: "닉네임2",
      gender: "혼성",
      alcohol: "10병",
      mood: "프로술게이머",
      contact: "인스타: alcoholic",
    },
    {
      nickname: "닉네임3",
      gender: "여성",
      alcohol: "3병",
      mood: "시끌벅적",
      contact: "인스타: party-tonight",
    },
  ]);

  return (
    <div className="flex flex-col h-full">
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

      <div className="mt-6">
        <p className="font-extrabold text-lg mb-3">{today} 매칭결과</p>
        <p>나를 포함하여 n명과 00:00에 매치되었어요!</p>
      </div>

      <div className="flex flex-col gap-4">
        {matchingResult.map((data, index) => {
          const [active, setActive] = useState(false);
          return (
            <div>
              <p className="flex flex-col  py-[22px] px-5 shadow-lg rounded-2xl">
                <div
                  className="flex flex-row items-center justify-between"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <span className="font-bold">{data.nickname} </span>
                  {active ? (
                    <UpIcon width={"12"} height={"24"} />
                  ) : (
                    <DownIcon width={"12"} height={"24"} />
                  )}
                </div>

                {active ? (
                  <div className="flex flex-col gap-4  mt-6">
                    <p className="flex flex-row justify-between">
                      <div>성별</div>
                      <div>{data.gender}</div>
                    </p>
                    <p className="flex flex-row justify-between">
                      <div>평균 주량</div> <div>{data.alcohol} </div>
                    </p>
                    <p className="flex flex-row justify-between">
                      <div>원하는 분위기</div> <div>{data.gender}</div>
                    </p>
                    <p className="flex flex-row justify-between">
                      <div>연락처</div> <div>{data.contact}</div>
                    </p>
                  </div>
                ) : null}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex-grow" />

      <div className="mb-4">
        <Button state={true} title={"확인"} path={"/alert"} />
      </div>
    </div>
  );
}
