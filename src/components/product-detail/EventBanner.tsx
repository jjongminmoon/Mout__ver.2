import styled from "@emotion/styled";

export default function EventBanner() {
  return (
    <Wrapper>
      <Banner
        src="https://img.soldout.co.kr/items/2023/08/31/333ad97c-8cb1-4dc7-8af4-db58809bbc22.png/soldout/resize/570x570/optimize"
        alt="이벤트 배너 이미지"
      />
      <Banner
        src="https://img.soldout.co.kr/items/2023/08/30/7310eb6d-9168-4b8c-8749-2ac0702befa6.png/soldout/resize/570x570/optimize"
        alt="이벤트 배너 이미지"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const Banner = styled.img`
  width: 100%;
  height: 135px;
`;
