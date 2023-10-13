import styled from "@emotion/styled";
import Input from "../common/Input";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("정상적으로 로그인 되었습니다.");
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <Container>
      <Form onSubmit={handleEmailLogin}>
        <Input
          type="text"
          width="100%"
          height="50px"
          placeholder="아이디(이메일)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          width="100%"
          height="50px"
          placeholder="비밀번호"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Button>로그인</Button>
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

const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  color: white;
`;
