import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../pages/beforeLogin/Loading";

export default function GlobalLayout() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`
     px-[20px] 
     max-w-[400px]      
     h-full
    ${
      location.pathname == "/main"
        ? null
        : "bg-[linear-gradient(98deg,_rgba(255,255,255,1)_85%,_#fff6e5_100%)]"
    }
     `}
      >
          <Outlet />
      </div>
    </Suspense>
  );
}
