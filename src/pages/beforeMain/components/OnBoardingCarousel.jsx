export default function OnBoardingCarousel({ step }) {
  const First = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center h-full">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[0.9375rem]">
              감성 가득한
            </p>
            <p className="font-extrabold text-yellow text-xl">
              AI 필터 폴라로이드
            </p>
          </div>
          <p className="text-[#969696] font-semibold px-11 text-[0.8125rem]">
            3가지의 AI 필터로 나만의 사진을 완성하세요!
            <p>찍은 사진은 업로드해서 공유할 수 있어요.</p>
          </p>
        </header>

        <main className="relative mt-14 w-full flex justify-center">
          <img
            src="/images/OnBoardingPhoto_1.png"
            alt="OnBoardingPhoto_1"
            className="w-60 h-[30.625rem] object-cover"
          />
          <img
            src="/images/OnBoardingPhoto_1-1.png"
            alt="OnBoardingPhoto_1-1"
            className="absolute w-[17.5rem] h-[5.825rem] bottom-36 z-10 block object-cover"
          />
          <div
            id="blur"
            className="absolute bottom-0 left-0 w-full h-40 bg-white"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
            }}
          />
        </main>
      </div>
    );
  };

  const Second = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[0.9375rem]">
              혼자도 OK! 친구와도 OK!
            </p>
            <p className="font-extrabold text-yellow text-xl">
              주점 매칭 서비스
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[0.8125rem]">
            최대 4명까지 신청 가능한 매칭 서비스.
            <p>원하는 조건을 선택하면 딱 맞는 팀을 찾아드릴게요!</p>
          </p>
        </header>

        <main className="relative mt-16 w-full flex justify-center">
          <img
            src="/images/OnBoardingPhoto_2.png"
            alt="OnBoardingPhoto_2"
            className="w-60"
          />
          <div
            id="fade-out-box"
            className="absolute bottom-0 w-full h-56"
            style={{
              background:
                "linear-gradient(180.25deg, rgba(253, 253, 253, 0) 0.21%, #FDFDFD 49.84%)",
            }}
          />
        </main>
      </div>
    );
  };

  const Third = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[0.9375rem]">
              뭐가 다를까?
            </p>
            <p className="font-extrabold text-yellow text-xl flex flex-row justify-center gap-1">
              노란색? <div className="text-navy">파란색?</div>
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[0.8125rem]">
            노란색은 AI 필터를 적용한 사진이고,
            <p>파란색은 주점 매칭을 등록한 사람들의 사진이에요!</p>
          </p>
        </header>
        <main className="relative mt-16">
          <img
            src="/images/OnBoardingPhoto_3.png"
            alt="OnBoardingPhoto_3"
            className="w-60"
          />
          {/* <img
            src="/images/OnBoardingPhoto_3-1.png"
            alt="OnBoardingPhoto_3-1"
            className="absolute top-[21.875rem] right-[24.6875rem]"
          /> */}
          <div
            id="fade-out-box"
            className="absolute bottom-0 w-full h-56"
            style={{
              background:
                "linear-gradient(180.25deg, rgba(253, 253, 253, 0) 0.21%, #FDFDFD 49.84%)",
            }}
          />
        </main>
      </div>
    );
  };

  const Fourth = () => {
    return (
      <div className="flex flex-col items-center w-screen text-center ">
        <header>
          <div className="mb-4 ">
            <p className="font-bold text-[#4F4F4F] text-[0.9375rem]">
              신청한 날 자정에 나오는
            </p>
            <p className="font-extrabold text-yellow text-xl flex flex-row justify-center gap-1">
              매칭 결과
            </p>
          </div>
          <p className="text-[#969696] font-semibold text-[0.8125rem]">
            매칭 결과는 신청한 날짜의 자정에 발표돼요.
            <p>매칭된 상대의 정보를 보고 연락을 주고 받으세요!</p>
          </p>
        </header>
        <main className="relative mt-16">
          <img
            src="/images/OnBoardingPhoto_4.png"
            alt="OnBoardingPhoto_4"
            className="w-60"
          />{" "}
          <div
            id="fade-out-box"
            className="absolute bottom-0 w-full h-48"
            style={{
              background:
                "linear-gradient(180.25deg, rgba(253, 253, 253, 0) 0.21%, #FDFDFD 49.84%)",
            }}
          />
        </main>
      </div>
    );
  };

  return (
    <div
      className="relative h-4/5 mt-12 -ml-8 flex flex-row w-max  transition-all"
      style={{
        transform: `translateX(-${(step - 1) * 25}%)`,
      }}
    >
      <First />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
}
