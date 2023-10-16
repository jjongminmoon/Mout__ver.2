import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { AiFillCamera } from "react-icons/ai";

type Props = {
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function OpenFormButton({ setOpenForm }: Props) {
  return (
    <Button onClick={() => setOpenForm(true)}>
      <AiFillCamera className="write" />
    </Button>
  );
}

const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  background-color: black;

  .write {
    font-size: 24px;
    color: white;
  }
`;
