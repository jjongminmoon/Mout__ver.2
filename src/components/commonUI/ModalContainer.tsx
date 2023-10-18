import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  center: boolean;
};

export default function ModalContainer({ children, center }: Props) {
  return <Container center={center ? "center" : ""}>{children}</Container>;
}

const Container = styled.div<{ center: string }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0
  left: 0;
  display: flex;
  justify-content: ${(props) => props.center};
  align-items: ${(props) => props.center};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;  
`;
