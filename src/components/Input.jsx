export default function Input({ type, placeholder, info, setInput }) {
  const infoChange = (e, field) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <input
      className="
        w-full
        pl-3 
        py-3 
        border
        border-solid 
        border-lightgray
        rounded-xl
        "
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        infoChange(e, info);
      }}
    />
  );
}

export function PlusInput({ onInputChange, item, index }) {
  return (
    <input
      className="
        w-full
        pl-3 
        py-3 
        border
        border-solid 
        border-lightgray
        rounded-xl
        "
      type="text"
      placeholder="연락처 입력 (인스타 @1234, 카카오톡)"
      onChange={(e) => onInputChange(e, index)}
      value={item.title}
    />
  );
}
