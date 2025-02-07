import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/beforeMain/Home";
import SetNickName from "./pages/beforeMain/SetNickName";
import PrivacyPolicy from "./pages/beforeMain/PrivacyPolicy";
import Main from "./pages/afterMain/main/Main";
import Mypage from "./pages/afterMain/mypage/Mypage";
import ManagePolaroid from "./pages/afterMain/mypage/manage-polaroid/ManagePolaroid";
import GlobalLayout from "./style/GlobalLayout";
import EditProfile from "./pages/afterMain/mypage/edit-profile/EditProfile";
import DeletePolaroid from "./pages/afterMain/mypage/manage-polaroid/DeletePolaroid";
import ModifyPolaroid from "./pages/afterMain/mypage/manage-polaroid/ModifyPolaroid";
import MainLayout from "./style/MainLayout";
import AlertPage from "./pages/afterMain/alert/AlertPage.jsx";
import SignUpPolaroid from "./pages/afterMain/signUpPolaroid/SignUpPolaroid";
import FilterPolaroid from "./pages/afterMain/signUpPolaroid/FilterPolaroid";
import PrintPolaroid from "./pages/afterMain/signUpPolaroid/PrintPolaroid";
import UploadComplete from "./pages/afterMain/signUpPolaroid/UploadComplete.jsx";
import Loading from "./pages/beforeMain/Loading.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        {/* 로그인 이전 */}
        <Route path="/" element={<Loading />} />
        <Route path="login" element={<Home />} />
        <Route path="check-policy" element={<PrivacyPolicy />} />
        <Route path="set-nickname" element={<SetNickName />} />
        {/* 로그인 이후 */}
        <Route path="main" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="alert" element={<AlertPage />} />
          <Route path="mypage/:id" element={<Mypage />}></Route>
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="manage-polaroid" element={<ManagePolaroid />}>
            <Route path="modify-polaroid" element={<ModifyPolaroid />} />
            <Route path="delete-polaroid" element={<DeletePolaroid />} />
          </Route>
        </Route>
        {/* 폴라로이드 등록 */}
        <Route path="signup-polaroid" element={<SignUpPolaroid />} />
        <Route
          path="signup-polaroid/filter-polaroid"
          element={<FilterPolaroid />}
        />
        <Route
          path="signup-polaroid/filter-polaroid/print-polaroid"
          element={<PrintPolaroid />}
        />
        <Route
          path="signup-polaroid/filter-polaroid/print-polaroid/upload-polaroid"
          element={<UploadComplete />}
        />
      </Route>
    </Routes>
  );
}

export default App;
