import styled from "@emotion/styled";

type Props = {
  color: string;
  fontSize: string;
};

export default function Logo({ color, fontSize }: Props) {
  return (
    <P color={color} fontSize={fontSize}>
      Mout_
    </P>
  );
}

const P = styled.div<{ color: string; fontSize: string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
`;
