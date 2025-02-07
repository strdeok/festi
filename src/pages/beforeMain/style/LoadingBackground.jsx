import { SnowFlake, StarMedium, StarXl } from "../../../style/Icons";

export default function LoadingBackground() {
  return (
    <div
      id="background"
      className="w-full h-full absolute z-0 bg-[radial-gradient(50%_50%_at_100%_0%,rgba(252,175,22,0.1)_0%,rgba(253,253,253,0)_100%)] "
    >
      <span className="inline-block absolute right-10 top-10">
        <SnowFlake color={"white"} size={36} />
      </span>
      <span className="inline-block absolute left-24 top-32">
        <SnowFlake color={"#FFE7B7"} size={40} />
      </span>
      <span className="inline-block absolute left-14 top-44">
        <SnowFlake color={"#FFE7B7"} size={60} />
      </span>
      <span className="inline-block absolute right-12 bottom-36">
        <SnowFlake color={"#FFE7B7"} size={74} />
      </span>
      <span className="inline-block absolute left-8 bottom-20">
        <SnowFlake color={"white"} size={36} />
      </span>
      <span className="inline-block absolute left-16 bottom-12">
        <SnowFlake color={"white"} size={36} />
      </span>
      <span className="inline-block absolute right-0 bottom-36">
        <StarMedium />
      </span>
      <span className="inline-block absolute right-10 bottom-3">
        <StarXl />
      </span>
      <div className="w-full h-full bg-[radial-gradient(50%_50%_at_20%_80%,rgba(252,175,22,0.1)_0%,rgba(253,253,253,0)_100%)]"></div>
    </div>
  );
}
