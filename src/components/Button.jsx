import { useNavigate } from "react-router-dom";

export default function Button({ title, path, state, data }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (data){
          navigate(path, { state : { imageUrl: data } })
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
      <div className="w-[85px] h-[76px] flex flex-col justify-center items-center rounded-lg bg-white border-2 border-[#fcaf16]/25 relative">
          <p className="text-sm font-semibold text-center text-[#fcaf16]">{title}</p>
          <p className="text-sm font-semibold text-center text-[#fcaf16]">AI</p>
      </div>
      :
      <div className="w-[85px] h-[76px] flex flex-col justify-center items-center rounded-lg bg-white border border-[#f3f3f3] relative">
          <p className="text-sm font-semibold text-center text-[#969696]">{title}</p>
          <p className="text-sm font-semibold text-center text-[#969696]">AI</p>
      </div>
      }
        
    </>
  );
}
