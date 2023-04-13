import Search from "@/components/Search";
import GlobalStyles from "@/styled-components/GlobalStyles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if(!token) {
      router.push("/login")
    }
  },[router])
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Header />

      <StyledMain>
        <Search />
        {children}
      </StyledMain>
    </StyledWrapper>
  );
}

const StyledMain = styled.main`
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 25px;
  }
  @media (min-width: 1440px) {
    width: 90%;
    margin-left: 140px;
  }
`;

const StyledWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`;
