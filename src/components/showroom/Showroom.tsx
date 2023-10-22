import styled from "@emotion/styled";
import Title from "../commonUI/Title";
import { useState } from "react";
import { MapContainer } from "./MapContainer";

export default function ShowroomSelector() {
  const seongsu = "서울특별시 성동구 아차산로 9길 12";
  const mokdong = "서울특별시 양천구 오목로 354";
  const [address, setAddress] = useState(seongsu);

  return (
    <Container>
      <Wrapper>
        <SelectButton onClick={() => setAddress(seongsu)}>마우트 성수</SelectButton>
        <SelectButton onClick={() => setAddress(mokdong)}>마우트 목동</SelectButton>
      </Wrapper>
      <Title fontSize="20px">{address === seongsu ? "마우트 성수" : "마우트 목동"}</Title>
      <p>
        {address}, {address === seongsu ? "2층" : "지하 1층"}
      </p>
      <MapContainer address={address} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;

const SelectButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: black;
  font-size: 16px;
  color: white;
`;
