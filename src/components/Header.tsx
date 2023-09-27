import styled from "@emotion/styled";
import Logo from "./Common/Logo";
import ActionBar from "./Header/ActionBar";
import Navbar from "./Header/Navbar";
import SearchButton from "./Header/SearchButton";

export default function Header() {
  return (
    <Section>
      <Wrapper>
        <Logo color="white" fontSize="30px" />
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;
