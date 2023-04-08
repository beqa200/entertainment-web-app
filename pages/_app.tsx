import Layout from "@/layouts/Layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { createContext } from "react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export const MyContext = createContext<contextProps | null>(null);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [searchResult, setSearchResult] = useState<string>();

  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <MyContext.Provider value={{ searchResult, setSearchResult }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    );
  }
}
