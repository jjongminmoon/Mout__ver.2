import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { AiFillCamera } from "react-icons/ai";

type Props = {
  image: any;
  setImage: React.Dispatch<SetStateAction<any>>;
};

export default function PostFormImage({ image, setImage }: Props) {
  //
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <ImagePreview htmlFor="image-upload">
      <input type="file" id="image-upload" accept="image/*" onChange={(e) => uploadImage(e)} />
      {image ? (
        <Image src={image} alt="사용자 업로드 이미지" />
      ) : (
        <AiFillCamera className="camera" />
      )}
    </ImagePreview>
  );
}

const ImagePreview = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 430px;
  border: 1px solid #ddd;
  cursor: pointer;

  #image-upload {
    display: none;
  }

  .camera {
    font-size: 35px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
