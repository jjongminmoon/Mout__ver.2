import styled from "@emotion/styled";
import ProfileImage from "../commonUI/ProfileImage";
import { SetStateAction, useContext } from "react";
import { AllUserContext } from "../../contexts/AllUserProvider";
import { UserInfoProps } from "../../model/user";

type Props = {
  likesList: string[];
  setOpenLikesList: React.Dispatch<SetStateAction<boolean>>;
};

export default function LikeOfList({ likesList, setOpenLikesList }: Props) {
  const allUser = useContext(AllUserContext);
  const likesUserData = allUser.filter((user: UserInfoProps) => likesList.includes(user.nickname));

  return (
    <Wrapper>
      <ListWrapper>
        {likesUserData.map(({ id, image, nickname }: UserInfoProps) => (
          <Item key={id}>
            <ProfileImage size="30px" userImage={image} alternate={nickname} />
            <Nickname>{nickname}</Nickname>
          </Item>
        ))}
      </ListWrapper>
      <ExitButton onClick={() => setOpenLikesList(false)}>닫기</ExitButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 140px;
  height: 200px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 50;
`;

const ListWrapper = styled.ul`
  height: 90%;
  overflow-y: auto;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Nickname = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ExitButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;

  :hover {
    background-color: #ddd;
  }
`;
