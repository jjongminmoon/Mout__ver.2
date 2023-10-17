import styled from "@emotion/styled";

export default function TagLine({ tag }: { tag: string[] }) {
  return (
    <Wrapper>
      {tag.map((item, index) => (
        <p key={index}>#{item}</p>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  color: #297dcb;
  margin-top: 10px;
`;
