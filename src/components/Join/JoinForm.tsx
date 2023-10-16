import styled from "@emotion/styled";
import Input from "../common/Input";
import Checkbox from "./Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useAddUser } from "../../hooks/user";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (pwd !== pwd2) {
      alert("비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요.");
    } else {
      await createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          useAddUser(email);

          alert("Mout에 오신 것을 환영합니다. 회원님의 기본 정보를 입력해주세요.");
          navigate("/mypage/info");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleJoin}>
        <p>아이디</p>
        <Input
          type="text"
          width="100%"
          height="50px"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>비밀번호</p>
        <Input
          type="password"
          width="100%"
          height="50px"
          placeholder="비밀번호를 입력해주세요"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Input
          type="password"
          width="100%"
          height="50px"
          placeholder="비밀번호를 다시 입력해주세요"
          value={pwd2}
          onChange={(e) => setPwd2(e.target.value)}
        />
        <Checkbox checked={checked} setChecked={setChecked} />
        <Button
          backgroundColor={
            email !== "" && pwd !== "" && pwd2 !== "" && checked ? "black" : "#cccccc"
          }
        >
          회원가입
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

  p {
    font-weight: bold;
  }
`;

const Button = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 8px;
`;
