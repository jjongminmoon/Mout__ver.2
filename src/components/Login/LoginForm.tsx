import styled from "@emotion/styled";
import Input from "../Common/Input";
import Button from "../Common/Button";

export default function LoginForm() {
  return (
    <Container>
      <Form>
        <Input width="100%" height="50px" placeholder="아이디" />
        <Input width="100%" height="50px" placeholder="비밀번호" />
        <Button width="100%" height="56px" backgroundColor="#cccccc" fontSize="16px">
          로그인
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
