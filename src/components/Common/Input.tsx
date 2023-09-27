import styled from "@emotion/styled";

type Props = {
  width: string;
  height: string;
  placeholder: string;
};

export default function Input({ width, height, placeholder }: Props) {
  return <InputUI width={width} height={height} placeholder={placeholder} />;
}

const InputUI = styled.input<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 16px;
`;
