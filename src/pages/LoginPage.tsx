import styled from "@emotion/styled";
import Logo from "../components/Common/Logo";
import LoginForm from "../components/Login/LoginForm";
import ActionBar from "../components/Login/ActionBar";
import GoogleLogin from "../components/Login/GoogleLogin";

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
