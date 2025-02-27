import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrow } from "../../../style/Icons";
import PolaroidFrame from "../main/components/PolaroidFrame";
import Button, { DisneyButton } from "../../../components/Button";

export default function FilterPolaroid() {
  const navigate = useNavigate();
  const location = useLocation();
  const source = location.state;

  const [selectedOne, setSelectedOne] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThird, setSelectedThird] = useState(false);
  const [state, setState] = useState(false);

  const selectedButtonOne = () => {
    setSelectedOne(!selectedOne);
    setSelectedTwo(false);
    setSelectedThird(false);
  };

  const selectedButtonTwo = () => {
    setSelectedTwo(!selectedTwo);
    setSelectedOne(false);
    setSelectedThird(false);
  };

  const selectedButtonThird = () => {
    setSelectedThird(!selectedThird);
    setSelectedTwo(false);
    setSelectedOne(false);
  };

  useEffect(() => {
    if (selectedOne || selectedTwo || selectedThird) {
      setState(true);
    } else {
      setState(false);
    }
  }, [selectedOne, selectedTwo, selectedThird]);

  return (
    <>
      <div className="flex flex-col h-full items-center pt-4">
        <div className="w-full flex flex-row">
          <button
            className="
                        w-5
                        text-2xl
                        relative
                        "
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackArrow />
          </button>
        </div>
        <p className="text-lg font-semibold mb-6">AI필터 선택</p>
        <div>
          <PolaroidFrame source={source} />
        </div>
        <div className="flex flex-row justify-start items-center gap-2 mt-7">
          <div onClick={() => selectedButtonOne()}>
            <DisneyButton selected={selectedOne} title={"디즈니"} />
          </div>
          <div onClick={() => selectedButtonTwo()}>
            <DisneyButton selected={selectedTwo} title={"디즈니"} />
          </div>
          <div onClick={() => selectedButtonThird()}>
            <DisneyButton selected={selectedThird} title={"디즈니"} />
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="w-full mb-4">
          <Button
            title={"출력하기"}
            state={state}
            path={"print-polaroid"}
            data={source}
          />
        </div>
      </div>
    </>
  );
}
