import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import SignUpComplete from "./components/SignUpComplete";


export default function SignUpMatchingComplete() {
  const location = useLocation();

  const title = location.state.title;

  const signUpData = {
    date: location.state.date,
    nickname: location.state.nickname,
    img: location.state.img,
    gender: location.state.gender,
    preferredGender: location.state.preferredGender,
    time: location.state.time,
    averageAlcohol: location.state.averageAlcohol,
    preferredPeople: location.state.preferredPeople,
    preferredMood: location.state.preferredMood,
    contact: location.state.contact
};



  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-center align-center mt-12 mb-6">
        <p className="font-semibold text-lg">
            {title}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <SignUpComplete matchingData={signUpData} />
      </div>


      <div className="flex justify-center items-center mt-12 mb-4">
        <p className="text-[#686868] text-sm font-medium">매칭 결과는 0시에 알려드릴게요!</p>
      </div>

      <div className="mb-4">
        <Button state={true} title={"확인"} path={"/matching"} />
      </div>
    </div>
  );
}
