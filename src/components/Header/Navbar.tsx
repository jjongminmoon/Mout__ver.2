import styled from "@emotion/styled";
import { navList } from "../../assets/data/mapData";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const params = useLocation().pathname;

  return (
    <Wrapper>
      {navList.map(({ title, pathname }) => (
        <Item
          key={title}
          color={params === pathname ? "white" : "var(--mout-gray-m)"}
          underline={params === pathname ? "3px solid white" : "none"}
        >
          <Link to={pathname}>{title}</Link>
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
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
