import styled from "@emotion/styled";
import { FcInTransit, FcDeployment, FcFactory } from "react-icons/fc";

export default function DeliveryInfo() {
  return (
    <Wrapper>
      <Item>
        <FcDeployment className="icon" />
        일반 배송 <p>3,000원</p>
      </Item>
      <Item>
        <FcInTransit className="icon" />
        바로 배송 <p>5,000원</p>
      </Item>
      <Item>
        <FcFactory className="icon" />
        센터 보관<p>첫 90일 무료</p>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;

  .icon {
    font-size: 32px;
    background-color: #e5e5e5;
    padding: 5px;
    border-radius: 99px;
  }

  p {
    font-weight: 400;
  }
`;
