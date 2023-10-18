import styled from "@emotion/styled";
import Input from "../commonUI/Input";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("정상적으로 로그인 되었습니다.");
        navigate("/mypage/user-info");
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
          onChange={handleEmail}
        />
        <Input
          type="password"
          width="100%"
          height="50px"
          placeholder="비밀번호"
          value={pwd}
          onChange={handlePwd}
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
