import GlobalStyles from "@/styled-components/GlobalStyles";

type LayoutProps = {
  children: React.ReactNode;
};

export default function NestedLayout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
