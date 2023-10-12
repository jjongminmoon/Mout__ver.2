import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TradePage from "./pages/TradePage";
import TrendPage from "./pages/TrendPage";
import ShowroomPage from "./pages/ShowroomPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import AdminPage from "./pages/AdminPage";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/trend" element={<TrendPage />} />
      <Route path="/showroom" element={<ShowroomPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/find-password" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cs" element={<CustomerServicePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
