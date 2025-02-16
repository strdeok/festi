export default function MatchingResultMain({ mathchingData }) {
  return (
    <>
      <header className="py-6 text-lg font-medium">
        <span className="font-bold ">{mathchingData.nickname}님</span>의 팀과
        매칭 되었어요!
      </header>
      <div className="w-full bg-white p-5 rounded-2xl shadow-md">
        <div className="px-16 mb-8">
          <img
            src={mathchingData.img}
            alt="상대방 사진"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4 text-[#969696] text-[0.8125rem]">
          <p className="flex justify-between">
            본인 (팀) 성별
            <span className="text-sm font-bold text-black">
              {mathchingData.gender}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 성별
            <span className="text-sm font-bold text-black">
              {mathchingData.preferredGender}
            </span>
          </p>
          <p className="flex justify-between ">
            시간
            <span className="text-sm font-bold text-black">
              {mathchingData.time}
            </span>
          </p>
          <p className="flex justify-between ">
            평균 주량
            <span className="text-sm font-bold text-black">
              {mathchingData.averageAlcohol}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 인원
            <span className="text-sm font-bold text-black">
              {mathchingData.preferredPeople}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 분위기
            <span className="text-sm font-bold text-black">
              {mathchingData.preferredMood}
            </span>
          </p>
          <p className="flex justify-between ">
            연락처
            <span className="text-sm font-bold text-black text-right">
              <p>인스타 {mathchingData.contact.instagram}</p>
              <p>카카오톡 {mathchingData.contact.kakaoTalk}</p>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
