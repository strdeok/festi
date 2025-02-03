import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BackArrow, FilledCheckBox } from "../../style/Icons";

export default function PrivacyPolicy() {
  const [state, setState] = useState(false);
  const [admit, setAdmit] = useState({
    first: false,
    second: false,
  });

  const handleAdmit = (nth) => {
    setAdmit((prev) => ({
      ...prev,
      [nth]: !prev[nth],
    }));
  };

  const admitAll = () => {
    if (!admit.first || !admit.second) {
      setAdmit({
        first: true,
        second: true,
      });
    } else
      setAdmit({
        first: false,
        second: false,
      });
  };

  useEffect(() => {
    if (admit.first && admit.second) {
      setState(true);
    } else setState(false);
  }, [admit]);

  const navigate = useNavigate();

  return (
    <>
      <div
        className="
        flex
        flex-col
        items-left
        text-[#4F4F4F]
        h-full
        pt-4
        justify-between
        "
      >
        <div>
          <button
            className="
          w-5
          text-2xl
          relative
          mb-10
          "
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackArrow />
          </button>

          <div className="font-semibold text-[#1d1d1d] text-xl mb-3">
            개인정보 및 초상권 이용 동의
          </div>

          <p className="mb-5 pr-12 text-[#969696]">
            fest!에서 사용되는 개인정보 및 초상권과 관련된 이용약관에 대해
            동의합니다.
          </p>

          <button
            className="flex gap-4 font-semibold"
            onClick={() => {
              admitAll();
            }}
          >
            <FilledCheckBox state={state} /> 필수약관에 전체 동의
          </button>

          <div
            id="seperate-bar"
            className="border-2 border-solid border-[#F2F2F2] border-spacing-3 my-6"
          ></div>

          <div className="flex items-center mb-3 font-medium">
            <IoMdCheckmark
              onClick={() => {
                handleAdmit("first");
              }}
              className={`mr-3 text-2xl ${
                admit.first ? "text-yellow" : "text-[#4f4f4f]  "
              }`}
            />
            [필수] fest! 이용약관 동의
          </div>

          <div className="flex items-center mb-12 font-medium">
            <IoMdCheckmark
              onClick={() => {
                handleAdmit("second");
              }}
              className={`mr-3 text-2xl  ${
                admit.second ? "text-yellow" : "text-[#4f4f4f]  "
              }`}
            />
            [필수] 개인정보 및 초상권 이용 동의
          </div>
        </div>
        <div className="mb-4">
          <Button path={"/set-nickname"} title={"다음"} state={state} />
        </div>
      </div>
    </>
  );
}
