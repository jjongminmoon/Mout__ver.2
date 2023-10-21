import styled from "@emotion/styled";
import ProfileImage from "../commonUI/ProfileImage";
import RemoveCommentButton from "./RemoveCommentButton";
import { CommentsProps } from "../../model/trend";
import { creationTimeFromNow } from "../../util/creationTimeFromNow";
import { useUserData } from "../../hooks/user";
import { useContext, useState } from "react";
import { AllUserContext } from "../../contexts/AllUserProvider";

type Props = {
  comments: CommentsProps[] | undefined;
};

export default function Comments({ comments }: Props) {
  const { userData } = useUserData();
  const allUser = useContext(AllUserContext);
  const [limitText, setLimitText] = useState(40);
  const [limitComments, setLimitComments] = useState(3);

  const toggleEllipsis = (txt: string, limit: number) => {
    return {
      text: txt.slice(0, limit),
      isShowMore: txt.length > limit
    };
  };

  const handleShowMoreText = () => {
    setLimitText(500);
  };

  const toggleAllComments = (comments: CommentsProps[], limit: number) => {
    return {
      comments: comments.slice(0, limit),
      isShowmore: comments.length > limit
    };
  };

  const handleShowMoreComments = (comments: CommentsProps[]) => {
    setLimitComments(comments.length);
  };

  return (
    <Wrapper>
      <CommentsCount>
        댓글 <p className="count">{comments?.length}</p>개
      </CommentsCount>
      <CommentList>
        {comments &&
          toggleAllComments(comments, limitComments).comments.map((item, index) => (
            <Item key={index}>
              <ProfileImage
                size="44px"
                userImage={allUser.find(({ nickname }: any) => nickname === item.nickname)?.image}
                alternate={item.nickname}
              />
              <div>
                <ContentWrapper>
                  <Nickname>{item.nickname}</Nickname>
                  <Time>{creationTimeFromNow(item.createdAt)}</Time>
                </ContentWrapper>
                <Comment>
                  {toggleEllipsis(item.comment, limitText).text}
                  {toggleEllipsis(item.comment, limitText).isShowMore && (
                    <ShowMoreButton onClick={handleShowMoreText}>...더보기</ShowMoreButton>
                  )}
                </Comment>
              </div>
              {userData.nickname === item.nickname && <RemoveCommentButton comment={item} />}
            </Item>
          ))}
      </CommentList>

      {comments && toggleAllComments(comments, limitComments).isShowmore && (
        <ShowMoreButton onClick={() => handleShowMoreComments(comments)}>
          {comments.length}개의 댓글 모두 보기
        </ShowMoreButton>
      )}
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
  align-items: top;
  gap: 10px;
  margin-top: 10px;
  height: 100%;
  min-height: 70px;

  :first-child {
    margin: 0;
  }
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

const ShowMoreButton = styled.button`
  color: var(--mout-gray-s);
  border: none;
  background-color: white;
`;

const Time = styled.p`
  font-size: 13px;
  color: var(--mout-gray-s);
`;
