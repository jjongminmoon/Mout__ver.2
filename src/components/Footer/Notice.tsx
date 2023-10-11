import styled from "@emotion/styled";

export default function Notice() {
  return (
    <Wrapper>
      <p>
        주식회사 엠스엘디티는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별판매자가 등록한
        상품정보에 대해서 책임지지 않습니다.
      </p>
      <p>단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.</p>
      <br />
      <p>
        당사는 고객님의 안전거래를 위해 관련 법률에 의거하여 NHN KCP의 에크로서비스를 적용하고
        있습니다.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #aaaaaa;
`;
