export default function CheckAgreement({ setAgreement, setActive }) {
  return (
    <div className="flex justify-center items-center w-full h-full absolute px-11">
      <div
        id="background"
        className="fixed w-full h-full left-0 top-0 z-10 bg-black bg-opacity-30 backdrop-blur-[1px]"
      />
      <div className="z-20 bg-white p-6 rounded-2xl text-center ">
        <p className="mt-2 text-lg font-bold">개인정보 및 초상권 동의</p>
        <p className="mt-4 px-9 text-[#969696] text-sm font-medium">
          동의를 철회하실 경우 fest!를 이용하는데 어려움이 있을 수 있어요.
          철회에 동의 하신다면 철회 버튼을 눌러주세요.
        </p>
        <p className="mt-8">
          <button
            className="w-[122px] h-11 rounded-lg border border-[#dfdfdf] text-darkgray mr-3"
            onClick={() => {
              setActive(false);
              setAgreement(true);
            }}
          >
            취소
          </button>
          <button
            className="w-[122px] h-11 rounded-lg bg-yellow text-white"
            onClick={() => {
              setActive(false);
              setAgreement(false);
            }}
          >
            철회
          </button>
        </p>
      </div>
    </div>
  );
}
