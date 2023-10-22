import styled from "@emotion/styled";
import Title from "../components/commonUI/Title";
import OpenFormButton from "../components/trend/OpenFormButton";
import TrendList from "../components/trend/PostList";
import PostUploadForm from "../components/trend/PostUploadForm";
import { useState } from "react";

export default function TrendPage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Section>
      <TitleWrapper>
        <Title fontSize="32px">트렌드</Title>
        <OpenFormButton setOpenForm={setOpenForm} />
      </TitleWrapper>
      <TrendList filter="all" />

      {openForm && <PostUploadForm setOpenForm={setOpenForm} />}
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
