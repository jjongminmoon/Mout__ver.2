import styled from "@emotion/styled";
import NewCarousel from "../components/Main/NewCarousel";
import RankingCarousel from "../components/Main/RankingCarousel";

export default function MainPage() {
  return (
    <Section>
      <RankingCarousel />
      <NewCarousel />
    </Section>
  );
}

const Section = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
