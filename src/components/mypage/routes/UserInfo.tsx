import styled from "@emotion/styled";
import ChangeNickname from "../ChangeNickname";
import ChangeProfileImage from "../ChangeProfileImage";
import { useUserData } from "../../../hooks/user";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

export default function UserInfo() {
  const authData = useContext(AuthContext);
  const { userData } = useUserData();

  const infoList = [
    { title: "이메일(ID)", info: userData !== undefined && userData.email },
    {
      title: "가입경로",
      info: authData?.providerData[0].providerId === "password" ? "마우트" : "구글"
    },
    { title: "가입일", info: authData?.metadata.creationTime }
  ];

  return (
    <>
      {userData && (
        <Container>
          <tbody>
            <Item>
              <Th>프로필 이미지</Th>
              <Td>
                {userData.image === null ? "X" : "O"}
                <ChangeProfileImage />
              </Td>
            </Item>
            <Item>
              <Th>닉네임</Th>
              <Td>
                {userData.nickname ? userData.nickname : "닉네임을 설정해주세요"}
                <ChangeNickname />
              </Td>
            </Item>
            {infoList.map(({ title, info }) => (
              <Item key={title}>
                <Th>{title}</Th>
                <Td>{info}</Td>
              </Item>
            ))}
          </tbody>
        </Container>
      )}
    </>
  );
}
const Container = styled.table`
  width: 100%;
  margin-top: 40px;
  border-top: 2px solid black;
  font-size: 14px;
`;

const Item = styled.tr`
  padding: 20px 15px;
  border-bottom: 1px solid black;
`;

const Th = styled.th`
  width: 150px;
  height: 60px;
  text-align: left;
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  height: 60px;
`;
