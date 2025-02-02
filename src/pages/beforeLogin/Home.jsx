import Title from "../../components/Title";
import Login from "../../components/Login";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full z-30">
      <Title />
      <Login />
      <Outlet />
    </div>
  );
}
