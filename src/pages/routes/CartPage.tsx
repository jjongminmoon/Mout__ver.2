import Title from "../../components/commonUI/Title";
import CartList from "../../components/mypage/routes/CartList";

export default function CartPage() {
  return (
    <section>
      <Title fontSize="26px">장바구니</Title>
      <CartList />
    </section>
  );
}
