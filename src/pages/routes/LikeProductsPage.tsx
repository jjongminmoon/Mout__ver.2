import Title from "../../components/commonUI/Title";
import LikeProductsList from "../../components/mypage/routes/LikeProductsList";

export default function LikeProductsPage() {
  return (
    <section>
      <Title fontSize="26px">찜한 상품</Title>
      <LikeProductsList />
    </section>
  );
}
