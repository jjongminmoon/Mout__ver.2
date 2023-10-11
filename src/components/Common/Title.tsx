import styled from "@emotion/styled";

type Props = {
  fontSize: string;
  children: React.ReactNode;
};

export default function Title({ fontSize, children }: Props) {
  return <Text fontSize={fontSize}>{children}</Text>;
}

const Text = styled.p<{ fontSize: string }>`
  color: black;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
`;
