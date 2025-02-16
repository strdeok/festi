import { Glass } from "../../../../style/Icons";

export default function NoMatchingResult() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4 flex flex-row gap-2">
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
      </div>
      <Glass size={"54"} />
      <p className="text-[#BBBBBB] mt-6 font-semibold">매칭 결과가 나오지 않았어요.</p>
    </div>
  );
}
