import { Route, Routes } from "react-router-dom";
import "./index.css";
import SetNickName from "./pages/beforeMain/SetNickName";
import PrivacyPolicy from "./pages/beforeMain/PrivacyPolicy";
import Main from "./pages/afterMain/main/Main";
import Mypage from "./pages/afterMain/mypage/Mypage";
import ManagePolaroid from "./pages/afterMain/mypage/manage-polaroid/ManagePolaroid";
import GlobalLayout from "./style/GlobalLayout";
import MainLayout from "./style/MainLayout";
import AlertPage from "./pages/afterMain/alert/AlertPage.jsx";
import SignUpPolaroid from "./pages/afterMain/signUpPolaroid/SignUpPolaroid";
import FilterPolaroid from "./pages/afterMain/signUpPolaroid/FilterPolaroid";
import PrintPolaroid from "./pages/afterMain/signUpPolaroid/PrintPolaroid";
import UploadComplete from "./pages/afterMain/signUpPolaroid/UploadComplete";
import Matching from "./pages/afterMain/matching/Matching";
import SignUpMatching from "./pages/afterMain/matching/SignUpMatching";
import SignUpMatchingComplete from "./pages/afterMain/matching/SignUpMatchingComplete";
import ListSignUp from "./pages/afterMain/matching/ListSignUp";
import EditNickName from "./pages/afterMain/mypage/edit-nickname/EditNickName.jsx";
import MatchingResult from "./pages/afterMain/matchingResult/MatchingResult.jsx";
import DeleteAcount from "./pages/afterMain/mypage/DeleteAcount.jsx";
import DeletePolaroidsModal from "./pages/afterMain/mypage/manage-polaroid/components/DeletePolaroidsModal.jsx";
import OnBoarding from "./pages/beforeMain/OnBoarding.jsx";
import Login from "./pages/beforeMain/Login.jsx";
import SendAuth from "./pages/beforeMain/SendAuth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        {/* 메인 이전 */}
        <Route index element={<OnBoarding />} />
        <Route path="login" element={<Login />} />
        <Route path="check-policy" element={<SendAuth />} /> {/* 임시 url */}
        <Route path="loading" element={<PrivacyPolicy />} />{" "}
        {/* 임시 url */}
        <Route path="set-nickname" element={<SetNickName />} />
        {/* 메인 이후 */}
        <Route element={<MainLayout />}>
          <Route path="main" element={<Main />} />
          <Route path="alert" element={<AlertPage />} />
          <Route path="mypage/:id" element={<Mypage />}>
            <Route path="delete-acount" element={<DeleteAcount />} />
          </Route>
        </Route>

        {/* 메인이후 + 레이아웃 벗어남 (BottomNavigation 미적용) */}
        <Route path="mypage/:id/edit-nickname" element={<EditNickName />} />
        <Route path="matching-result" element={<MatchingResult />} />
        <Route path="mypage/:id/manage-polaroid" element={<ManagePolaroid />}>
          <Route path="delete-polaroid" element={<DeletePolaroidsModal />} />
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
