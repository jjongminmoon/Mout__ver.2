import styled from "@emotion/styled";
import ProfileImage from "../commonUI/ProfileImage";
import RemovePostButton from "./RemovePostButton";
import { creationTimeFromNow } from "../../util/creationTimeFromNow";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useState } from "react";
import { useUserData } from "../../hooks/user";

type Props = {
  userImage: string;
  nickname: string;
  createdAt: Date;
};

export default function PostHeader({ userImage, nickname, createdAt }: Props) {
  const { userData } = useUserData();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <ProfileImage size="44px" userImage={userImage} alternate={nickname} />
      <Nickname>{nickname}</Nickname>
      <Time>{creationTimeFromNow(createdAt)}</Time>

      {userData.nickname === nickname && (
        <PostMenuButton onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineEllipsis />
          {openMenu && (
            <MenuWrapper>
              <PostMenu>
                <RemovePostButton />
              </PostMenu>
              <CloseMenuButton onClick={() => setOpenMenu(false)}>닫기</CloseMenuButton>
            </MenuWrapper>
          )}
        </PostMenuButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
`;

const Nickname = styled.p`
  font-weight: bold;
`;

const Time = styled.p`
  margin-left: 20px;
  color: var(--mout-gray-s);
  font-size: 14px;
`;

const PostMenuButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  border: none;
  background-color: white;
  font-size: 28px;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 120px;
  height: 70px;
  padding: 10px;
  background-color: white;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 50;
`;

const PostMenu = styled.div`
  height: 90%;
`;

const CloseMenuButton = styled.button`
  margin-top: auto;
  border: none;
  border-radius: 8px;
  width: 100%;

  :hover {
    background-color: #ddd;
  }
`;
