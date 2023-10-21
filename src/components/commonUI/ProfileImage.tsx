import styled from "@emotion/styled";
import noImage from "../../assets/images/noImage.webp";

type Props = {
  size: string;
  userImage: string;
  alternate: string;
};

export default function ProfileImage({ size, userImage, alternate }: Props) {
  return (
    <Wrapper size={size}>
      {userImage ? (
        <Image src={userImage} alt={`${alternate} 님의 프로필 이미지`} />
      ) : (
        <Image src={noImage} alt="프로필 이미지 없음" />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  min-width: ${(props) => props.size};
  height: ${(props) => props.size};
  min-height: ${(props) => props.size};
  border-radius: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;
