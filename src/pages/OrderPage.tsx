import styled from "@emotion/styled";
import Title from "../components/commonUI/Title";
import OrderList from "../components/order/OrderList";
import PaymentDetail from "../components/order/PaymentDetail";
import AddressInfo from "../components/order/AddressInfo";
import commaFormat from "../util/commaFormat";
import { useUserData } from "../hooks/user";
import { CartProps } from "../model/cart";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { userData } = useUserData();
  const cart: CartProps[] | undefined = userData?.cart;
  const totalPrice = cart?.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b);
  const navigate = useNavigate();

  const handleCancel = () => {
    if (confirm("이전 페이지로 돌아가시겠습니까?")) {
      navigate("/mypage/cart");
    } else {
      return;
    }
  };

  return (
    <Section>
      <TitleWrapper>
        <Title fontSize="32px">주문 / 결제</Title>
      </TitleWrapper>
      <OrderList cart={cart} />
      <AddressInfo userData={userData} />
      <Wrapper>
        <PaymentDetail totalPrice={totalPrice} />
        <ButtonWrapper>
          <PaymentButton>{commaFormat(Number(totalPrice))}원 결제하기</PaymentButton>
          <CancelButton onClick={handleCancel}>취소하기</CancelButton>
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  width: 60%;
`;

const PaymentButton = styled.button`
  width: 100%;
  height: 90px;
  border: none;
  border-radius: 8px;
  background-color: var(--mout-button-blue);
  font-size: 18px;
  color: white;
`;

const CancelButton = styled.button`
  width: 100%;
  height: 90px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: black;
  font-size: 18px;
  color: white;
`;
