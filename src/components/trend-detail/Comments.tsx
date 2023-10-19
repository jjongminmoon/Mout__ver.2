import styled from "@emotion/styled";
import ProfileImage from "../commonUI/ProfileImage";
import { CommentsProps } from "../../model/trend";

type Props = {
  comments: CommentsProps[] | undefined;
};

export default function Comments({ comments }: Props) {
  return (
    <Wrapper>
      <CommentsCount>
        댓글 <p className="count">{comments?.length}</p>개
      </CommentsCount>
      <CommentList>
        {comments &&
          comments.map(({ user_image, nickname, comment }, index) => (
            <Item key={index}>
              <ProfileImage size="44px" userImage={user_image} alternate={nickname} />
              <div>
                <ContentWrapper>
                  <Nickname>{nickname}</Nickname>
                  <Comment>{comment}</Comment>
                </ContentWrapper>
                <Time>2시간 전</Time>
              </div>
            </Item>
          ))}
      </CommentList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const CommentsCount = styled.div`
  display: flex;
  font-size: 14px;

  .count {
    margin-left: 5px;
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 60px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Nickname = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const Comment = styled.p`
  font-size: 14px;
`;

const Time = styled.p`
  font-size: 13px;
  color: var(--mout-gray-s);
`;
