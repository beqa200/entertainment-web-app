import Layout from "@/layouts/Layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export const MyContext = createContext<contextProps>({
  searchResult: "",
  setSearchResult: () => {},
  wholeData: [],
  trendingData: [],
  recommendedData: [],
  setWholeData: () => {},
  setTrendingData: () => {},
  setRecommendedData: () => {},
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [searchResult, setSearchResult] = useState<string>("");
  const [wholeData, setWholeData] = useState<Movie[]>([]);
  const [trendingData, setTrendingData] = useState<Movie[]>([]);
  const [recommendedData, setRecommendedData] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();
      setWholeData(data);
      const filteredData = data.filter((item: Movie) => item.isTrending);
      setTrendingData(filteredData);
      const filteredData2 = data.filter((item: Movie) => !item.isTrending);
      setRecommendedData(filteredData2);
    })();
  }, []);

  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <MyContext.Provider
        value={{
          searchResult,
          setSearchResult,
          wholeData,
          setWholeData,
          trendingData,
          setTrendingData,
          recommendedData,
          setRecommendedData,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    );
  }
}
