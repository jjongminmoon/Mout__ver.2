import styled from "@emotion/styled";
import Title from "../components/commonUI/Title";
import OpenFormButton from "../components/trend/OpenFormButton";
import { useState } from "react";
import TrendList from "../components/trend/TrendList";
import TrendUploadForm from "../components/trend/TrendUploadForm";

export default function TrendPage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Section>
      <TitleWrapper>
        <Title fontSize="32px">트렌드</Title>
        <OpenFormButton setOpenForm={setOpenForm} />
      </TitleWrapper>
      <TrendList filter="all" />

      {openForm && <TrendUploadForm setOpenForm={setOpenForm} />}
    </Section>
  );
}

const Section = styled.section`
  width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
`;
