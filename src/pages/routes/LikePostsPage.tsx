import Title from "../../components/commonUI/Title";
import PostList from "../../components/trend/PostList";

export default function LikePostsPage() {
  return (
    <section>
      <Title fontSize="26px">좋아요 한 게시물</Title>
      <PostList filter="likePosts" />
    </section>
  );
}
