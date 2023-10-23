import styled from "@emotion/styled";
import commaFormat from "../../util/commaFormat";
import Title from "../commonUI/Title";

export default function PaymentDetail({ totalPrice }: { totalPrice: number | undefined }) {
  const deliveryCharge = 3000;

  console.log(typeof (Number(totalPrice) * 0.01).toFixed(0));

  return (
    <Wrapper>
      <Title fontSize="18px">결제 정보</Title>
      <Payment>
        <SubTitle>최종 결제 금액</SubTitle>
        <p>상품 금액 : {commaFormat(Number(totalPrice))}원</p>
        <p>+ 배송비 : {commaFormat(deliveryCharge)}원</p>
        <TotalPrice>{commaFormat(Number(totalPrice) + deliveryCharge)}원</TotalPrice>
        <Points>({commaFormat(Number((Number(totalPrice) * 0.01).toFixed(0)))}P 적립)</Points>
      </Payment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  margin-top: 40px;
  font-size: 14px;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #ddd;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const TotalPrice = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Points = styled.p`
  font-size: 14px;
  color: var(--mout-gray-m);
`;
