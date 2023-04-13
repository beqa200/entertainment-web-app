import GlobalStyles from "@/styled-components/GlobalStyles";
import { useRouter } from "next/router";
import { useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function NestedLayout({ children }: LayoutProps) {
  useEffect(() => {
    localStorage.removeItem("auth-token")
  },[])
 
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
