import { useEffect } from "react";
import { MiddleTitle } from "../../../components/Title";
import { SmallButton } from "../../../components/Button";
import OnlyMainBackGroundStyle from "../../../style/OnlyMainBackGroundStyle";
import PolaroidSection from "./components/CardSection";
import ScrollButton from "../../../components/ScrollButton";
import Polaroids from "../../../components/Polaroids";
import BottomNavigation from "../../../components/BottomNavigation";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OnlyMainBackGroundStyle />

      <div className="w-full pb-32 relative flex flex-col items-center">
        <div className="mt-28 mb-8 text-center">
          <MiddleTitle />
          <p className="text-sm font-bold text-[#6c6c6c]">축제까지 D-3</p>
        </div>

        <PolaroidSection />

        <div className="text-xl text-black font-medium text-center w-48 my-8">
          유니들의 폴라로이드를 구경해보세요!
        </div>

        <SmallButton
          title={"폴라로이드 등록하기"}
          color={"bg-yellow"}
          path={"/signup-polaroid"}
        />

        <Polaroids />
      </div>

      <ScrollButton bottom={"bottom-28"} />
      <BottomNavigation />
    </>
  );
}
