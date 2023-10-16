import styled from "@emotion/styled";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AllUserContext } from "../../contexts/AllUserProvider";
import { loginGoogle } from "../../service/firebase";
import { useAddUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const allUser = useContext(AllUserContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await loginGoogle().then((result) => {
      const user = result.user;

      if (allUser.includes(user)) {
        alert("정상적으로 로그인 되었습니다.");
        navigate("/");
      } else {
        useAddUser(user.email);
        alert("Mout에 오신 것을 환영합니다. 회원님의 기본 정보를 입력해주세요.");
        navigate("/");
      }
    });
  };

  return (
    <Button onClick={handleGoogleLogin}>
      <FcGoogle className="google" />
      구글 로그인
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 56px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: black;

  .google {
    font-size: 20px;
  }
`;
