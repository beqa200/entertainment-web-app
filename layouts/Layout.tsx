import Search from "@/components/Search";
import GlobalStyles from "@/styled-components/GlobalStyles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import jwt from "jsonwebtoken";
import { Head } from "next/document";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  //redirect to login page when user is not authorized
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const decodedToken: any = jwt.decode(token);

      // Check the expiration status
      const isTokenExpired = decodedToken.exp < Date.now() / 1000;
      if (isTokenExpired) {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router]);

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
