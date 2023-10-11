import styled from "@emotion/styled";
import Title from "../components/Common/Logo";
import JoinForm from "../components/Join/JoinForm";

export default function JoinPage() {
  return (
    <Section>
      <Title color="black" fontSize="50px">
        회원가입
      </Title>
      <JoinForm />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  margin: 100px auto;
`;
