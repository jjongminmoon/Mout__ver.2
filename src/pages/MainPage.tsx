import styled from "@emotion/styled";
import NewCarousel from "../components/main/NewCarousel";
import RankingCarousel from "../components/main/RankingCarousel";

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
