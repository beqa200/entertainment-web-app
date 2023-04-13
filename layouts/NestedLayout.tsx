import { MyContext } from "@/pages/_app";
import GlobalStyles from "@/styled-components/GlobalStyles";
import { useContext, useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function NestedLayout({ children }: LayoutProps) {
  const context = useContext(MyContext);
  //remove auth token after user navigate to login/register page

  useEffect(() => {
    localStorage.removeItem("auth-token");
    context.setWholeData([]);
  }, []);

  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
