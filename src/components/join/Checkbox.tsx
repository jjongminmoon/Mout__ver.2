import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  checked: boolean;
  setChecked: React.Dispatch<SetStateAction<boolean>>;
};

export default function Checkbox({ checked, setChecked }: Props) {
  return (
    <Wrapper>
      <input type="checkbox" onClick={() => setChecked(!checked)} />
      <p>{"[필수]"}</p>
      <span>마우트 이용 약관에 동의합니다.</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 14px;

  p {
    margin-right: 5px;
  }
`;
