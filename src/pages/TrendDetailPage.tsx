import styled from "@emotion/styled";
import PostHeader from "../components/trend-detail/PostHeader";
import useTrend from "../hooks/trend";
import { useParams } from "react-router-dom";
import { TrendProps } from "../model/trend";
import LikesButton from "../components/trend-detail/LikesButton";
import TagLine from "../components/trend-detail/TagLine";
import Comments from "../components/trend-detail/Comments";
import CommentInput from "../components/trend-detail/CommentInput";

export default function TrendDetailPage() {
  const { trendList } = useTrend();
  const { id } = useParams();
  const post: TrendProps = trendList.find((data: TrendProps) => data.id === id);

  return (
    <>
      {post && (
        <Section>
          <PostHeader userImage={post.user_image} nickname={post.nickname} />
          <PostImage src={post.image} alt={`${post.nickname} 님의 게시물 이미지`} />
          <LikesButton likesList={post.liked} postId={String(id)} />
          <LikesCount>
            좋아요<p className="count">{post.liked.length}</p>개
          </LikesCount>
          <TagLine tag={post.tag} />
          <Comments comments={post.comments} />
          <CommentInput postId={post.id} image={post.image} />
        </Section>
      )}
    </>
  );
}

const Section = styled.section`
  width: 720px;
  margin: 0 auto;
  padding: 30px 40px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
`;

const LikesCount = styled.div`
  display: flex;
  font-size: 14px;

  .count {
    margin-left: 5px;
    font-weight: bold;
  }
`;
