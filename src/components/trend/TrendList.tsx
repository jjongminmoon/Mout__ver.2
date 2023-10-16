import styled from "@emotion/styled";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../../service/firebase";
import { TrendProps } from "../../model/trend";
import { Link } from "react-router-dom";
import LikesAndComments from "./LikesAndComments";

export default function TrendList() {
  const [trendList, setTrendList] = useState<any>([]);

  console.log(trendList);

  useEffect(() => {
    const q = query(collection(dbService, "trend"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setTrendList(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      {trendList.map(({ id, image, user_image, nickname, tag, liked, comments }: TrendProps) => (
        <Link to={`/trend/detail/${id}`}>
          <PostCard key={id}>
            <Image src={image} alt={`${nickname} 님의 게시물 이미지`} />
            <Content>
              <UserInfo>
                <ImageWrapper>
                  <UserImage src={user_image} alt={`${nickname} 님의 프로필 이미지`} />
                </ImageWrapper>
                <Nickname>{nickname}</Nickname>
                <LikesAndComments likesList={liked} commentsList={comments} />
              </UserInfo>
              <Tag>
                {tag.map((item, index) => (
                  <p key={index}>#{item}</p>
                ))}
              </Tag>
            </Content>
          </PostCard>
        </Link>
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

const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%:
  border-radius: 100%;
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
