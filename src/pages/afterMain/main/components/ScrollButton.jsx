import { DownIcon, UpIcon } from "../../../../style/Icons";

export default function ScrollButton({bottom}) {
  const handleScroll = (position) => {
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <div className={`fixed right-5 ${bottom} flex flex-col z-50 gap-3`}>
      <button
        onClick={() => handleScroll(0)}
        className="size-10 bg-white bg-opacity-50"
      >
        <UpIcon width={"40"} height={"20"} />
      </button>
      <button
        onClick={() => handleScroll(document.documentElement.scrollHeight)}
        className="size-10 bg-white bg-opacity-50"
      >
        <DownIcon width={"40"} height={"20"} />
      </button>
    </div>
  );
}
