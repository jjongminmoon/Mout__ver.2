import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNavigator from "./PageNavigator";
import ScrollToUp from "./util/ScrollToUp";
import { QueryClient, QueryClientProvider } from "react-query";
import { AllUserProvider } from "./contexts/AllUserProvider";
import { AuthProvider } from "./contexts/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {}
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AllUserProvider>
          <Header />
          <Main>
            <PageNavigator />
          </Main>
          <Footer />
        </AllUserProvider>
      </AuthProvider>
      <ScrollToUp />
    </QueryClientProvider>
  );
}

export default App;

const Main = styled.main`
  min-height: calc(100vh - 465px);
  width: 1200px;
  margin: 0 auto;
  padding-top: 135px;
`;
