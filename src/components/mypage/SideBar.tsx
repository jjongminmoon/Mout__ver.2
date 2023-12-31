import styled from "@emotion/styled";
import Title from "../commonUI/Title";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import { communityNavList, shoppingNavList } from "../../assets/data/mapData";

export default function SideBar() {
  return (
    <Container>
      <Title fontSize="28px">
        <Link to="/mypage">마이페이지</Link>
      </Title>
      <NavList data={shoppingNavList} />
      <NavList data={communityNavList} />
    </Container>
  );
}

const Container = styled.div`
  min-width: 200px;
`;
