import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  setImage: any;
  setTagArr: React.Dispatch<SetStateAction<string[]>>;
};

export default function ResetButton({ setImage, setTagArr }: Props) {
  //
  const handleReset = () => {
    if (confirm("초기화 하시겠습니까?")) {
      setImage(null);
      setTagArr([]);
    } else {
      return;
    }
  };

  return <Button onClick={handleReset}>초기화</Button>;
}

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
`;
