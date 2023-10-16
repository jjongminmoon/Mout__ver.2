import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TradePage from "./pages/TradePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import TrendPage from "./pages/TrendPage";
import TrendDetailPage from "./pages/TrendDetailPage";
import ShowroomPage from "./pages/ShowroomPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import ActivitySummaryPage from "./components/mypage/routes/ActivitySummaryPage";
import CartPage from "./components/mypage/routes/CartPage";
import LikeProductsPage from "./components/mypage/routes/LikeProductsPage";
import UserInfoPage from "./components/mypage/routes/UserInfoPage";
import AddressManagementPage from "./components/mypage/routes/AddressManagementPage";
import MyPostsPage from "./components/mypage/routes/MyPostsPage";
import LikePostsPage from "./components/mypage/routes/LikePostsPage";
import { useUserData } from "./hooks/user";

export default function PageNavigator() {
  const { userData } = useUserData();

  console.log(userData);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/trade/detail/:id" element={<ProductDetailPage />} />
      <Route path="/trend" element={<TrendPage />} />
      <Route path="/trend/detail/:id" element={<TrendDetailPage />} />
      <Route path="/showroom" element={<ShowroomPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/find-password" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/mypage" element={<MyPage />}>
        <Route path="/mypage" element={<ActivitySummaryPage />} />
        <Route path="/mypage/cart" element={<CartPage />} />
        <Route path="/mypage/like-products" element={<LikeProductsPage />} />
        <Route path="/mypage/user-info" element={<UserInfoPage />} />
        <Route path="/mypage/address-management" element={<AddressManagementPage />} />
        <Route path="/mypage/my-posts" element={<MyPostsPage />} />
        <Route path="/mypage/like-posts" element={<LikePostsPage />} />
      </Route>
      <Route path="/cs" element={<CustomerServicePage />} />
    </Routes>
  );
}
