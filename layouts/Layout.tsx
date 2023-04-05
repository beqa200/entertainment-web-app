import GlobalStyles from "@/styled-components/GlobalStyles";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
