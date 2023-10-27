import styled from "@emotion/styled";
import LikesAndComments from "./LikesAndComments";
import useTrend from "../../hooks/trend";
import ProfileImage from "../commonUI/ProfileImage";
import { TrendProps } from "../../model/trend";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/user";

type Props = {
  filter: string;
};

export default function PostList({ filter }: Props) {
  const { userData } = useUserData();
  const { trendList } = useTrend();
  const myPostsList = trendList.filter(({ email }: TrendProps) => email === userData.email);
  const likePostsList = trendList.filter(({ liked }: TrendProps) => liked.includes(userData.id));

  return (
    <Container>
      {(filter === "myPosts"
        ? myPostsList
        : filter === "likePosts"
        ? likePostsList
        : trendList
      ).map(({ id, image, user_image, nickname, tag, liked, comments }: TrendProps) => (
        <PostCard key={id}>
          <Link to={`/trend/detail/${id}`}>
            <Image src={image} alt={`${nickname} 님의 게시물 이미지`} />
            <Content>
              <UserInfo>
                <ProfileImage size="30px" userImage={user_image} alternate={nickname} />
                <Nickname>{nickname}</Nickname>
                <LikesAndComments likesList={liked} commentsList={comments} />
              </UserInfo>
              <Tag>
                {tag.map((item, index) => (
                  <p key={index}>#{item}</p>
                ))}
              </Tag>
            </Content>
          </Link>
        </PostCard>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const PostCard = styled.li`
  height: 430px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 10px;
  object-fit: cover;
`;

const Content = styled.div`
  height: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 8px 0;
`;

const Nickname = styled.p`
  font-size: 14px;
`;

const Tag = styled.div`
  display: flex;
  gap: 3px;
  color: var(--mout-gray-s);
  font-size: 13px;
`;
