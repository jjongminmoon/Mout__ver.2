import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  data: {
    name: string;
    pathname: string;
  }[];
};

export default function NavList({ data }: Props) {
  const [selected, setSelected] = useState("");

  return (
    <>
      <SubTitle>나의 쇼핑</SubTitle>
      <Wrapper>
        {data.map(({ name, pathname }) => (
          <Item
            key={pathname}
            color={name === selected ? "black" : "var(--mout-gray-s)"}
            fontWeight={name === selected ? "bold" : ""}
            onClick={() => setSelected(name)}
          >
            <Link to={pathname}>{name}</Link>
          </Item>
        ))}
      </Wrapper>
    </>
  );
}

const SubTitle = styled.h3`
  font-size: 18px;
  margin-top: 40px;
`;

const Wrapper = styled.ul`
  margin-top: 18px;
`;

const Item = styled.li<{ color: string; fontWeight: string }>`
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: 14px;
`;
