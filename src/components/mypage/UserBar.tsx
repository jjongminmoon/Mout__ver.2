import styled from "@emotion/styled";
import noImage from "../../assets/images/noImage.webp";
import { useUserData } from "../../hooks/user";

export default function UserBar() {
  const { userData } = useUserData();

  return (
    <>
      {userData && (
        <Container>
          <ImageBox>
            {userData.image === null ? (
              <Image src={noImage} alt="유저 이미지 없음" />
            ) : (
              <Image src={userData.image} alt="유저 이미지" />
            )}
          </ImageBox>
          <Nickname>
            {userData.nickname === null ? "닉네임을 설정해주세요" : userData.nickname}
          </Nickname>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 140px;
  margin-bottom: 30px;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.07);
`;

const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

const Nickname = styled.span`
  padding-left: 10px;
  font-size: 18px;
`;
