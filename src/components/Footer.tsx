import styled from "@emotion/styled";

import FooterBar from "./Footer/FooterBar";
import CompayInfo from "./Footer/CompayInfo";
import AddressInfo from "./Footer/AddressInfo";
import Notice from "./Footer/Notice";
import CustomerService from "./Footer/CustomerService";

export default function Footer() {
  return (
    <footer>
      <FooterBar />
      <Container>
        <div>
          <Title className="title">{"(주)마우트"}</Title>
          <CompayInfo />
          <AddressInfo />
          <Notice />
        </div>
        <div>
          <Title className="title">고객센터</Title>
          <CustomerService />
        </div>
      </Container>
    </footer>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 160px 69px 160px;
  font-size: 12px;
  color: var(--mout-gray-m);
`;

const Title = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
`;
