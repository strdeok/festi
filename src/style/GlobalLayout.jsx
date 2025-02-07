import { Outlet, useLocation } from "react-router-dom";

export default function GlobalLayout() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`px-[30px] h-full ${
        location.pathname !== "/main" && location.pathname !== "/"
          ? "bg-[radial-gradient(50%_50%_at_100%_80%,rgba(252,175,22,0.1)_0%,rgba(253,253,253,0)_100%)]"
          : ""
      }`}
    >
      <Outlet />
    </div>
  );
}
