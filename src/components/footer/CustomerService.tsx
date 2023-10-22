import styled from "@emotion/styled";
import { SiKakaotalk } from "react-icons/si";

export default function CustomerService() {
  return (
    <Wrapper>
      <p>{"평일 09:00 ~ 18:00 (주말,공휴일 휴무)"}</p>
      <p>점심 12:00 ~ 13:00</p>
      <SiKakaotalk className="kakao" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .kakao {
    margin-top: 20px;
    font-size: 30px;
    color: yellow;
  }
`;
