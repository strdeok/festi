import BottomNavigation from "../pages/afterLogin/main/components/BottomNavigation";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
