import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ActionBar() {
  return (
    <Wrapper>
      <Link to="/join">간편 회원가입</Link>
      <Line>|</Line>
      <Link to="/find-password">비밀번호 찾기</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  font-size: 13px;
  margin: 20px 0 40px 0;
`;

const Line = styled.p`
  color: #ddd;
`;
