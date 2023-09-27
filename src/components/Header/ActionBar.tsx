import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const actionList = [
  { title: "로그인", pathname: "/login" },
  { title: "마이페이지", pathname: "/mypage" },
  { title: "고객센터", pathname: "/cs" }
];

export default function ActionBar() {
  return (
    <ActionList>
      {actionList.map(({ title, pathname }) => (
        <li key={title}>
          <Link to={pathname}>{title}</Link>
        </li>
      ))}
      <Link to="/admin">관리페이지</Link>
    </ActionList>
  );
}

const ActionList = styled.ul`
  display: flex;
  gap: 20px;
  color: var(--mout-gray-s);
  font-size: 13px;
`;
