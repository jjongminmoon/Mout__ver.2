import styled from "@emotion/styled";

type Props = {
  type: string;
  width?: string;
  height?: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, placeholder, width, height, value, onChange }: Props) {
  return (
    <InputUI
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      width={width}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

const InputUI = styled.input<{ width?: string; height?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 16px;
`;
