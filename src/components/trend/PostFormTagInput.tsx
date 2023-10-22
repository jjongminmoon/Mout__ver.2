import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";

type Props = {
  tagArr: string[];
  setTagArr: React.Dispatch<SetStateAction<string[]>>;
};

export default function PostFormTagInput({ tagArr, setTagArr }: Props) {
  const [tag, setTag] = useState("");

  const addToTag = () => {
    const newTag = tagArr.concat(tag);
    setTagArr(newTag);
    setTag("");
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addToTag();
    }
  };

  return (
    <Wrapper>
      <p>태그</p>
      <InputWrapper>
        <TagInput
          value={tag}
          placeholder="태그를 추가해보세요"
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Button onClick={addToTag}>추가</Button>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 30px;
  margin-top: 5px;
`;

const TagInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const Button = styled.button`
  width: 50px;
  color: white;
  border: none;
  background-color: black;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
