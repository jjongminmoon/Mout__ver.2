import styled from "@emotion/styled";
import Logo from "./Common/Logo";
import ActionBar from "./Header/ActionBar";
import Navbar from "./Header/Navbar";
import SearchButton from "./Header/SearchButton";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Section>
      <Wrapper>
        <Link to="/">
          <Logo color="white" fontSize="30px" />
        </Link>
        <ActionBar />
      </Wrapper>
      <Wrapper>
        <Navbar />
        <SearchButton />
      </Wrapper>
    </Section>
  );
}

const Section = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 135px;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: black;
  z-index: 9999;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;
