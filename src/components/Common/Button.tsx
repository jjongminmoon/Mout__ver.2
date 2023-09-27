import styled from "@emotion/styled";

type Props = {
  width: string;
  height: string;
  backgroundColor: string;
  fontSize: string;
  children: React.ReactNode;
};

export default function Button({ width, height, backgroundColor, fontSize, children }: Props) {
  return (
    <ButtonUI width={width} height={height} backgroundColor={backgroundColor} fontSize={fontSize}>
      {children}
    </ButtonUI>
  );
}

const ButtonUI = styled.button<{
  width: string;
  height: string;
  backgroundColor: string;
  fontSize: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: white;
`;
