export default function Input({ type, placeholder, name, setInput, input }) {
  const infoChange = (e, key) => {
    if (typeof input === "object") {
      setInput((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    } else setInput(e.target.value);
  };

  return (
    <input
      className="w-full pl-3 py-3 border border-solid border-lightgray rounded-xl"
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        infoChange(e, name);
      }}
    />
  );
}
