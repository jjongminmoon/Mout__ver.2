import styled from "@emotion/styled";
import Title from "../../common/Title";
import { useUserData } from "../../../hooks/user";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import ChangeNickname from "../ChangeNickname";
import ChangeProfileImage from "../ChangeProfileImage";

export default function UserInfoPage() {
  const authData = useContext(AuthContext);
  const { userData } = useUserData();

  console.log(userData);

  const infoList = [
    { title: "이메일(ID)", info: userData !== undefined && userData.email },
    { title: "닉네임", info: userData?.nickname },
    {
      title: "가입경로",
      info: authData?.providerData[0].providerId === "password" ? "마우트" : "구글"
    },
    { title: "가입일", info: authData?.metadata.creationTime }
  ];

  return (
    <>
      {userData && (
        <section>
          <Title fontSize="26px">회원 정보</Title>
          <UserInfoTable>
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
                <Item>
                  <Th>{title}</Th>
                  <Td>{info}</Td>
                </Item>
              ))}
            </tbody>
          </UserInfoTable>
        </section>
      )}
    </>
  );
}

const UserInfoTable = styled.table`
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
