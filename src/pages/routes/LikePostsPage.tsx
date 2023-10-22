import Title from "../../components/commonUI/Title";
import TrendList from "../../components/trend/PostList";

export default function LikePostsPage() {
  return (
    <section>
      <Title fontSize="26px">좋아요 한 게시물</Title>
      <TrendList filter="likePosts" />
    </section>
  );
}
