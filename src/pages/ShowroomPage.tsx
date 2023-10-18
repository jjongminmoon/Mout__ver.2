import styled from "@emotion/styled";
import Title from "../components/commonUI/Title";
import Showroom from "../components/showroom/Showroom";

export default function ShowroomPage() {
  return (
    <Section>
      <TitleWrapper>
        <Title fontSize="32px">쇼룸</Title>
      </TitleWrapper>
      <Showroom />
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
