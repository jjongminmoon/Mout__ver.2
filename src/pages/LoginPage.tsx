import styled from "@emotion/styled";
import Logo from "../components/common/Logo";
import LoginForm from "../components/login/LoginForm";
import ActionBar from "../components/login/ActionBar";
import GoogleLogin from "../components/login/GoogleLogin";

export default function LoginPage() {
  return (
    <Section>
      <Logo color="black" fontSize="50px" />
      <LoginForm />
      <ActionBar />
      <GoogleLogin />
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
