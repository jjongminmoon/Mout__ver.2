import styled from "@emotion/styled";
import { actionList } from "../../assets/data/mapData";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export default function ActionBar() {
  const authData = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      signOut(auth);
      alert("정상적으로 로그아웃 되었습니다.");
      navigate("/");
    }
  };

  return (
    <ActionList>
      <Item onClick={authData ? handleLogout : () => navigate("/login")}>
        {authData ? "로그아웃" : "로그인"}
      </Item>
      {actionList.map(({ title, pathname }) => (
        <Item key={title}>
          <Link to={pathname}>{title}</Link>
        </Item>
      ))}
    </ActionList>
  );
}

const ActionList = styled.ul`
  display: flex;
  gap: 20px;
  color: var(--mout-gray-s);
  font-size: 13px;
`;

const Item = styled.li`
  cursor: pointer;
`;
