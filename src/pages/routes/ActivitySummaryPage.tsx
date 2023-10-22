import styled from "@emotion/styled";
import Title from "../../components/commonUI/Title";
import {
  TbShoppingCart,
  TbShoppingCartHeart,
  TbMessageCircle2,
  TbArticle,
  TbHeartFilled
} from "react-icons/tb";
import { useUserData } from "../../hooks/user";

export default function ActivitySummaryPage() {
  const { userData } = useUserData();

  const activityList = userData && [
    { title: "장바구니", icon: <TbShoppingCart />, data: userData.cart?.length },
    { title: "찜한 상품", icon: <TbShoppingCartHeart />, data: userData.likeProducts?.length },
    { title: "내가 쓴 게시물", icon: <TbArticle />, data: userData.posts?.length },
    { title: "작성한 댓글", icon: <TbMessageCircle2 />, data: userData.comments?.length },
    { title: "좋아요한 게시물", icon: <TbHeartFilled />, data: userData.likePosts?.length }
  ];

  console.log(userData);
  console.log(userData?.comments);

  return (
    userData && (
      <section>
        <Title fontSize="26px">활동 요약</Title>
        <Wrapper>
          {activityList.map(({ title, icon, data }: any) => (
            <Item key={title}>
              <Name>{title}</Name>
              <Icon>{icon}</Icon>
              <Count>{data}개</Count>
            </Item>
          ))}
        </Wrapper>
      </section>
    )
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(1, 1, 1, 0.07);
`;

const Name = styled.p`
  font-weight: bold;
`;
const Icon = styled.p`
  font-size: 30px;
`;
const Count = styled.p`
  font-size: 14p;
  font-weight: bold;
`;
