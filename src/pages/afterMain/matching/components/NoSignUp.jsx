import { Glass_2 } from "../../../../style/Icons";

export default function NoSignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4 flex flex-row gap-2">
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
        <div className="rounded-full size-2 bg-[#ebebeb]"></div>
      </div>
      <Glass_2 size={"54"} />
      <p className="text-[#BBBBBB] mt-6 font-semibold">매칭 등록 내역이 없어요.</p>
    </div>
  );
}
