import styled from "@emotion/styled";
import ProfileImage from "../commonUI/ProfileImage";
import { creationTimeFromNow } from "../../util/creationTimeFromNow";

type Props = {
  userImage: string;
  nickname: string;
  createdAt: Date;
};

export default function PostHeader({ userImage, nickname, createdAt }: Props) {
  return (
    <Wrapper>
      <ProfileImage size="44px" userImage={userImage} alternate={nickname} />
      <Nickname>{nickname}</Nickname>
      <Time>{creationTimeFromNow(createdAt)}</Time>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
`;

const Nickname = styled.p``;

const Time = styled.p`
  margin-left: auto;
  color: var(--mout-gray-s);
  font-size: 14px;
`;
