import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const navList = [
  { title: "추천", pathname: "/" },
  { title: "트레이드", pathname: "/trade" },
  { title: "트렌드", pathname: "/trend" },
  { title: "쇼룸", pathname: "/showroom" }
];

export default function Navbar() {
  const [selected, setSelected] = useState("추천");

  return (
    <NavList>
      {navList.map(({ title, pathname }) => (
        <Item
          key={title}
          onClick={() => setSelected(title)}
          color={title === selected ? "white" : "var(--mout-gray-m)"}
          underline={title === selected ? "3px solid white" : "none"}
        >
          <Link to={pathname}>{title}</Link>
        </Item>
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

const Item = styled.li<{ color: string; underline: string }>`
  color: ${(props) => props.color};
  padding-bottom: 8px;
  border-bottom: ${(props) => props.underline};
`;
