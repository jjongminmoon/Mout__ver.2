import styled from "@emotion/styled";
import Title from "../commonUI/Title";
import TrendFormImage from "./TrendFormImage";
import TrendFormTagInput from "./TrendFormTagInput";
import UploadButton from "./UploadButton";
import ResetButton from "./ResetButton";
import { SetStateAction, useState } from "react";
import { useUserData } from "../../hooks/user";
import { BiX } from "react-icons/bi";

type Props = {
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function TrendUploadForm({ setOpenForm }: Props) {
  const { userData } = useUserData();
  const [image, setImage] = useState<any>(null);
  const [tagArr, setTagArr] = useState<string[]>([]);

  return (
    <Container>
      <BiX className="exit" onClick={() => setOpenForm(false)} />
      <Title fontSize="32x">트렌드 업로드</Title>
      <Form>
        <TrendFormImage image={image} setImage={setImage} />
        <TrendFormTagInput tagArr={tagArr} setTagArr={setTagArr} />
        <Tag>
          {tagArr.map((item, index) => (
            <p key={index}>#{item}</p>
          ))}
        </Tag>
        <ButtonWrapper>
          <UploadButton
            userData={userData}
            image={image}
            tagArr={tagArr}
            setOpenForm={setOpenForm}
          />
          <ResetButton setImage={setImage} setTagArr={setTagArr} />
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;

  .exit {
    position: absolute;
    top: 15px;
    right: 40px;
    font-size: 50px;
    cursor: pointer;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 500px;
  height: 600px;
`;

const Tag = styled.div`
  display: flex;
  width: 400px;
  height: 30px;
  padding: 5px 10px;
  font-size: 14px;
  color: var(--mout-gray-m);
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 400px;
  height: 50px;
`;
