import styled from "@emotion/styled";

export default function PostHeader() {
  return (
    <Wrapper>
      <ProfileImgae />
      <Nickname></Nickname>
      <Time>2시간 전</Time>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 44px;
`;

const ProfileImgae = styled.img`
  width: 100%;
  height: 100%:
`;

const Nickname = styled.p``;

const Time = styled.p``;
