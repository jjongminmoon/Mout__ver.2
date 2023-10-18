import styled from "@emotion/styled";
import Title from "../components/commonUI/Title";
import JoinForm from "../components/join/JoinForm";

export default function JoinPage() {
  return (
    <Section>
      <Title fontSize="50px">회원가입</Title>
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
