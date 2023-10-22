import styled from "@emotion/styled";

export default function CompayInfo() {
  return (
    <Wrapper>
      <p>주식회사 마우트</p>
      <p>대표 : 서구보</p>
      <p>사업자 등록번호 : 113-86-XXXXX</p>
      <p>통신판매업자신고 : 제2021-서울성동-XXXXXX호</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;
