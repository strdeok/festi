export default function SignUpComplete({ matchingData }) {
    const isNickname = matchingData.nickname !== "닉네임"? true : false;
    return (
      <>
        <div className="w-full bg-white p-5 rounded-2xl shadow-md">
            {isNickname?
            <div className="flex justify-center font-bold mb-4">
                <p>
                    {matchingData.nickname}님의 팀
                </p>
            </div>
            :
            null}
            
            <div className="flex justify-center items-center">
                <div className="w-[160px] h-[160px] mb-6 rounded-xl">
                <img
                    src={matchingData.img}
                    alt="팀사진"
                    className="w-full h-full rounded-xl object-fill"
                    />
                </div>
            </div>
          
  
          <div className="flex flex-col gap-4 text-[#969696] text-[0.8125rem]">
            <p className="flex justify-between">
              본인 (팀) 성별
              <span className="text-sm font-bold text-black">
                {matchingData.gender}
              </span>
            </p>
            <p className="flex justify-between ">
              원하는 성별
              <span className="text-sm font-bold text-black">
                {matchingData.preferredGender}
              </span>
            </p>
            <p className="flex justify-between ">
              시간
              <span className="text-sm font-bold text-black">
                {matchingData.time}
              </span>
            </p>
            <p className="flex justify-between ">
              평균 주량
              <span className="text-sm font-bold text-black">
                {matchingData.averageAlcohol}
              </span>
            </p>
            <p className="flex justify-between ">
              원하는 인원
              <span className="text-sm font-bold text-black">
                {matchingData.preferredPeople}
              </span>
            </p>
            <p className="flex justify-between ">
              원하는 분위기
              <span className="text-sm font-bold text-black">
                {matchingData.preferredMood}
              </span>
            </p>
            <p className="flex justify-between ">
              연락처
              <span className="text-sm font-bold text-black text-right">
                {matchingData.contact.map((item) => {
                    return(
                        <p>{item.title}</p>
                    );
                })}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
  