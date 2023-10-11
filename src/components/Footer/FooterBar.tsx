import styled from "@emotion/styled";

export default function FooterBar() {
  return (
    <Wrapper>
      <p>회사소개</p>
      <p>페널티 정책</p>
      <p>검수기준</p>
      <p>이용약관</p>
      <p>개인정보처리방침</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 160px;
  gap: 50px;
  margin-top: 40px;
  font-size: 14px;
  color: black;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  p {
    cursor: pointer;
  }
`;
