import Title from "../../components/Title";
import { BigStar } from "../../style/Icons";

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[linear-gradient(98deg,_rgba(255,255,255,1)_85%,_#fff6e5_100%)]">
      <p className="text-darkgray">유니들의 축제</p>
      <Title />
    </div>
  );
}
