import styled from "@emotion/styled";
import Header from "./components/Header";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <>
      <Header />
      <Main>
        <PageNavigator />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  min-height: calc(100vh - 465px);
  width: 1200px;
  margin: 0 auto;
  padding-top: 135px;
`;
