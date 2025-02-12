import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../style/Icons";
import OnBoardingCarousel from "./components/OnBoardingCarousel";

export default function OnBoarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  return (
    <div
      className="flex flex-col w-full h-full overflow-hidden
     bg-[radial-gradient(50%_50%_at_50%_50%,rgba(252,175,22,0.05)_0%,rgba(253,253,253,0.05)_100%)]"
    >
      {/* <button
        className="py-[15px]"
        onClick={() => {
          if (step === 1) {
            navigate(-1);
          } else setStep((prev) => prev - 1);
        }}
      >
        <BackArrow />
      </button> */}

      <div
        id="progress-dot"
        className="mt-6 flex flex-row justify-center gap-1"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`size-2 ${
              index === step - 1 ? "bg-yellow" : "bg-gray"
            } rounded-full`}
          />
        ))}
      </div>

      <OnBoardingCarousel step={step} />

      <div className="flex-grow" />

      <div className="pb-5">
        <button
          className="w-full rounded-full py-3 bg-yellow text-white"
          onClick={() => {
            if (step === 4) {
              navigate("/set-nickname");
            } else {
              setStep((prev) => prev + 1);
            }
            console.log(step);
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
}
