import styled from "@emotion/styled";

type Props = {
  color: string;
  fontSize: string;
};

export default function Logo({ color, fontSize }: Props) {
  return (
    <Text color={color} fontSize={fontSize}>
      Mout_
    </Text>
  );
}

const Text = styled.p<{ color: string; fontSize: string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
`;
