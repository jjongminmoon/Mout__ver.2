import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  return (
    <Button>
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
