import styled from "@emotion/styled";

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;  
`;
