import styled from "@emotion/styled";

export default function AddressInfo() {
  return (
    <Wrapper>
      <p>사업장 소재지 : 서울특별시 성동구 아차산로9길 12 1층 마우트 오피스</p>
      <p>드랍존 : 서울특별시 성동구 아차산로 126 지하 2층</p>
      <p>
        쇼룸 : 서울특별시 성동구 아차산로 9길 12 2층 (솔드아웃 성수), 서울특별시 양천구 오목로 354
        지하 1층 (솔드아웃 목동)
      </p>
      <p>호스팅 서비스 : 마이크로소프트사</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
