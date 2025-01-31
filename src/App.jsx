import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/beforeLogin/Home";
import Login from "./pages/beforeLogin/Login";
import PrivacyPolicy from "./pages/afterLogin/PrivacyPolicy";
import Main from "./pages/afterLogin/main/Main";
import SetNickName from "./pages/afterLogin/SetNickName";
import Mypage from "./pages/afterLogin/mypage/Mypage";
import ManagePolaroid from "./pages/afterLogin/mypage/manage-polaroid/ManagePolaroid";
import GlobalLayout from "./style/GlobalLayout";
import EditProfile from "./pages/afterLogin/mypage/edit-profile/EditProfile";
import DeletePolaroid from "./pages/afterLogin/mypage/manage-polaroid/DeletePolaroid";
import ModifyPolaroid from "./pages/afterLogin/mypage/manage-polaroid/ModifyPolaroid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        {/* 로그인 이전 */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="check-policy" element={<PrivacyPolicy />} />
        <Route path="set-nickname" element={<SetNickName />} />
        {/* 로그인 이후 */}
        <Route path="main" element={<Main />} />
        <Route path="new-polaroid" />
        <Route path="mypage/:id" element={<Mypage />}>
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="manage-polaroid" element={<ManagePolaroid />}>
            <Route path="modify-polaroid" element={<ModifyPolaroid />} />
            <Route path="delete-polaroid" element={<DeletePolaroid />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
