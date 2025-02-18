import { useNavigate } from "react-router-dom";

export default function Button({ title, path, state, data }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (data){
          navigate(path, { state : data })
        }
        else {
          navigate(path);
        }
      }}
      className={`w-full rounded-full py-3 ${
        state ? "bg-yellow text-white" : "bg-gray  text-darkgray"
      }`}
      disabled={!state}
    >
      {title}
    </button>
  );
}

export function DownloadButton({ title }) {
  return (
    <button
      className={`border border-[#FCAF16] w-full rounded-full py-3 text-[#FCAF16]`}
    >
      {title}
    </button>
  );
}

export function CameraButton({ title, state, onCameraOpen }) {
  return (
    <button
      onClick={() => onCameraOpen()}
      className={`w-full rounded-full py-3 ${
        state ? "bg-yellow text-white" : "bg-gray  text-darkgray"
      }`}
      disabled={!state}
    >
      {title}
    </button>
  );
}

export function SmallButton({ title, color, path }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(path);
      }}
      className={`w-3/4 rounded-full py-3 ${color} font-medium`}
    >
      {title}
    </button>
  );
}

export function DisneyButton({ title, selected }) {
  return (
    <>
      {selected
      ?
      <div className="w-[5.3125rem] h-[4.75rem] flex flex-col justify-center items-center rounded-lg bg-white border-2 border-[#fcaf16]/25 relative">
          <p className="text-sm font-semibold text-center text-[#fcaf16]">{title}</p>
          <p className="text-sm font-semibold text-center text-[#fcaf16]">AI</p>
      </div>
      :
      <div className="w-[5.3125rem] h-[4.75rem] flex flex-col justify-center items-center rounded-lg bg-white border border-[#f3f3f3] relative">
          <p className="text-sm font-semibold text-center text-[#969696]">{title}</p>
          <p className="text-sm font-semibold text-center text-[#969696]">AI</p>
      </div>
      }
        
    </>
  );
}

export function MatchingButton({ title, selected, category, text, onAddButton }) {
  let textStyle = "text-sm";
  let height="h-[44px]"
  let width="w-full";

  if (!onAddButton) {
    const onAddButton = () => {};
  }

  if (category === "날짜" || category === "성별") {
    width="w-[112px]";
  } else if (category === "시간") {
    width="w-[62px]";
  } else if (category === "주량") {
    if (title === "반") 
      width="w-[70px]"
    else width="w-[82px]";

  } else if (category === "분위기") {
    width="w-[92px]";
  } else {
    width="w-full"
    textStyle = text;
    height="h-[48px]"
  }

  const titleColor = selected ? "#fcaf16" : "#969696";
  const borderSize = selected ? "border-2" : "border";
  const borderColor = selected ? "border-[#fcaf16]/25" : "border-[#f3f3f3]";
  const backgroundColor = selected ? "#FFF7E8" : "#FFFFFF";

  return(
    <>
      <div className={`${width} flex flex-shrink-0 ${height} items-center justify-center bg-[${backgroundColor}] ${borderSize} rounded-xl ${borderColor}`}
      onClick={onAddButton}>
        <p className={`text-[${titleColor}] ${textStyle} font-semibold`}>{title}</p>
      </div>
    </>
  );
}
