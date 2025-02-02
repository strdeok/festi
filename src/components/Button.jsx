import { useNavigate } from "react-router-dom";

export default function Button({ title, path, state }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(path);
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

export function SmallButton({ title, color }) {
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
