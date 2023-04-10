import Search from "@/components/Search";
import GlobalStyles from "@/styled-components/GlobalStyles";
import styled from "styled-components";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyles />
      <Header />

      <StyledMain>
        <Search />
        {children}
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`;
