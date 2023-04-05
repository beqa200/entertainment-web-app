import Search from "@/components/Search";
import GlobalStyles from "@/styled-components/GlobalStyles";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyles />
      <Header />

      <main style={{ padding: "0 16px" }}>
        <Search />
        {children}
      </main>
    </>
  );
}
