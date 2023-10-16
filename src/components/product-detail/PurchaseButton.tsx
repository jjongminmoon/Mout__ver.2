import styled from "@emotion/styled";

export default function PurchaseButton({ height, fontSize }: { height: string; fontSize: string }) {
  return (
    <Button height={height} fontSize={fontSize} onClick={() => {}}>
      구매
    </Button>
  );
}

const Button = styled.button<{ height: string; fontSize: string }>`
  width: 100%;
  height: ${(props) => props.height};
  padding: 11px 0;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: var(--mout-button-blue);
`;
