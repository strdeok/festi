export default function SwitchButton({
  agreement,
  setAgreement,
  setActive,
}) {
  return (
    <div>
      <div
        onClick={() => {
          if (agreement) {
            setActive(true);
          } else setAgreement(true);
        }}
        className={`rounded-xl w-10 h-6 flex items-center p-1 transition-all ${
          agreement ? "bg-yellow" : "bg-gray"
        }`}
      >
        <div
          id="ball"
          className={`rounded-full bg-white size-4 relative transition-all ${
            agreement ? "left-1/2" : "left-0"
          } `}
        />
      </div>
    </div>
  );
}
