import BottomNavigation from "../pages/afterLogin/BottomNavigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
