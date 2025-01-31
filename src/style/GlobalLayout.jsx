import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Outlet />
    </div>
  );
}
