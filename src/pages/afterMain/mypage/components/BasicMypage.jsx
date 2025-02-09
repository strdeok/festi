import { useState } from "react";
import { Outlet } from "react-router-dom";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import DivideBar from "./DivideBar";
import CheckAgreement from "./CheckAgreement";

export default function BasicMypage() {
  const [active, setActive] = useState(false);
  const [agreement, setAgreement] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <header className="w-full text-center py-4 font-bold text-lg">
        마이페이지
      </header>

      <main className="flex flex-col w-full font-semibold">
        <FirstSection />
        <DivideBar />
        <SecondSection />
        <DivideBar />
        <ThirdSection />
        <DivideBar />
        <FourthSection
          agreement={agreement}
          setAgreement={setAgreement}
          active={active}
          setActive={setActive}
        />
      </main>
      {active ? (
        <CheckAgreement setAgreement={setAgreement} setActive={setActive} />
      ) : null}
      <Outlet />
    </div>
  );
}
