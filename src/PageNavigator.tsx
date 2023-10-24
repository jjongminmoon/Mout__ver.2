import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import Loading from "./components/commonUI/Loading";

const MainPage = lazy(() => import("./pages/MainPage"));
const TradePage = lazy(() => import("./pages/TradePage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const TrendPage = lazy(() => import("./pages/TrendPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const ShowroomPage = lazy(() => import("./pages/ShowroomPage"));
const MyPage = lazy(() => import("./pages/MyPage"));
const ActivitySummaryPage = lazy(() => import("./pages/routes/ActivitySummaryPage"));
const CartPage = lazy(() => import("./pages/routes/CartPage"));
const LikeProductsPage = lazy(() => import("./pages/routes/LikeProductsPage"));
const UserInfoPage = lazy(() => import("./pages/routes/UserInfoPage"));
const AddressManagementPage = lazy(() => import("./pages/routes/AddressManagementPage"));
const MyPostsPage = lazy(() => import("./pages/routes/MyPostsPage"));
const LikePostsPage = lazy(() => import("./pages/routes/LikePostsPage"));

export default function PageNavigator() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/trade/detail/:id" element={<ProductDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/trend" element={<TrendPage />} />
        <Route path="/trend/detail/:id" element={<PostDetailPage />} />
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
      </Routes>
    </Suspense>
  );
}
