import styled from "@emotion/styled";
import SideBar from "../components/mypage/SideBar";
import UserBar from "../components/mypage/UserBar";
import loginStatus from "../hooks/loginStatus";
import { Outlet } from "react-router-dom";

export default function MyPage() {
  loginStatus();

  return (
    <Section>
      <SideBar />
      <Container>
        <UserBar />
        <Outlet />
      </Container>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Container = styled.div`
  width: 940px;
`;
