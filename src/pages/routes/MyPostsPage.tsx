import Title from "../../components/commonUI/Title";
import TrendList from "../../components/trend/TrendList";

export default function MyPostsPage() {
  return (
    <section>
      <Title fontSize="26px">내가 쓴 게시물</Title>
      <TrendList filter="myPosts" />
    </section>
  );
}
