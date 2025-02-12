export default function OnBoardingCarousel({ step }) {
  const First = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center mt-12 ">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[15px]">감성 가득한</p>
            <p className="font-extrabold text-yellow text-xl">
              AI 필터 폴라로이드 (1번)
            </p>
          </div>
          <p className="text-[#969696] font-semibold px-11 text-[13px]">
            3가지의 AI 필터로 나만의 사진을 완성하세요!
            <p>찍은 사진은 업로드해서 공유할 수 있어요.</p>
          </p>
        </header>
        <main className="bg-lightgray w-full h-full relative overflow-hidden">
          <div
            id="blur"
            className="absolute bottom-0 left-0 w-full h-20 bg-white"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
            }}
          />
        </main>
      </div>
    );
  };

  const Second = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center mt-12 ">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[15px]">
              혼자도 OK! 친구와도 OK!
            </p>
            <p className="font-extrabold text-yellow text-xl">
              주점 매칭 서비스 (2번)
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[13px]">
            최대 4명까지 신청 가능한 매칭 서비스.
            <p>원하는 조건을 선택하면 딱 맞는 팀을 찾아드릴게요!</p>
          </p>
        </header>
        <main></main>
      </div>
    );
  };

  const Third = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center mt-12 ">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[15px]">뭐가 다를까?</p>
            <p className="font-extrabold text-yellow text-xl flex flex-row justify-center gap-1">
              노란색? <div className="text-navy">파란색?(3번)</div>
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[13px]">
            노란색은 AI 필터를 적용한 사진이고,
            <p>파란색은 주점 매칭을 등록한 사람들의 사진이에요!</p>
          </p>
        </header>
        <main></main>
      </div>
    );
  };

  const Fourth = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center mt-12 ">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[15px]">
              신청한 날 자정에 나오는
            </p>
            <p className="font-extrabold text-yellow text-xl flex flex-row justify-center gap-1">
              매칭 결과(4번)
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[13px]">
            매칭 결과는 신청한 날짜의 자정에 발표돼요.
            <p>매칭된 상대의 정보를 보고 연락을 주고 받으세요!</p>
          </p>
        </header>
        <main></main>
      </div>
    );
  };

  return (
    <div
      className={`relative h-full -ml-8 flex flex-row w-max -translate-x-${
        step - 1
      }/4 transition-all`}
    >
      <First />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
}
