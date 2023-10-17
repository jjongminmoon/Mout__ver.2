import styled from "@emotion/styled";
import { useUserData } from "../../hooks/user";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";

type Props = {
  likesList: string[];
  commentsList: any;
};

export default function LikesAndComments({ likesList, commentsList }: Props) {
  const { userData } = useUserData();

  return (
    <CountWrapper>
      <Count>
        <BiMessageRounded />
        {commentsList.length}
      </Count>
      <Count>
        {likesList.includes(userData?.nickname) ? (
          <IoHeartSharp className="heart-fill" />
        ) : (
          <IoHeartOutline className="heart-empty" />
        )}
        {likesList.length}
      </Count>
    </CountWrapper>
  );
}

const CountWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  padding: 0 5px;
  font-size: 16px;
  color: white;
  background-color: var(--mout-gray-s);
  border-radius: 10px;
`;

const Count = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;

  .heart-fill {
    color: red;
    font-size: 17px;
  }

  .heart-empty {
    font-size: 17px;
  }
`;
