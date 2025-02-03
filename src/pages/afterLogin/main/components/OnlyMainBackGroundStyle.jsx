import { useEffect, useState } from "react";
import { SnowFlake } from "../../../../style/Icons";

export default function OnlyMainBackGroundStyle() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    setScrollHeight(document.documentElement.scrollHeight);
  }, [document.documentElement.scrollHeight]);

  return (
    <div
      className="w-full absolute top-0 left-0 z-0 overflow-x-hidden"
      style={{ height: scrollHeight }}
    >
      <div
        className="size-96 rounded-full relative right-1/4"
        style={{
          background:
            " radial-gradient(circle, rgba(252,175,22,0.15) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <div className="absolute top-28 left-16">
        <SnowFlake size={30} color={"white"} />
      </div>
      <div className="absolute top-36 left-20">
        <SnowFlake size={40} color={"white"} />
      </div>
      <div className="absolute top-10 right-10">
        <SnowFlake size={46} color={"#FFE7B7"} />
      </div>
      <div className="absolute top-96 right-10 z-30">
        <SnowFlake size={30} color={"white"} />
      </div>
      <div
        className="size-96 rounded-full absolute -right-1/2 top-48"
        style={{
          background:
            "radial-gradient(circle, rgba(1,73,154,0.15) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  );
}
