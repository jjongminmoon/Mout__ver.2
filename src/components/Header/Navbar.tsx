import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const navList = [
  { title: "추천", pathname: "/" },
  { title: "카테고리", pathname: "/category" },
  { title: "트렌드", pathname: "/trend" },
  { title: "쇼룸", pathname: "/showroom" }
];

export default function Navbar() {
  return (
    <NavList>
      {navList.map(({ title, pathname }) => (
        <li key={title}>
          <Link to={pathname}>{title}</Link>
        </li>
      ))}
    </NavList>
  );
}

const NavList = styled.ul`
  display: flex;
  gap: 25px;
  color: var(--mout-gray-m);
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 15px 0;
`;
