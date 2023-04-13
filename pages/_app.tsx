import Layout from "@/layouts/Layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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
  movieFilter: [],
  seriesFilter: [],
  bookmarkedMovieFilter: [],
  bookmarkedSeriesFilter: [],
  setWholeData: () => {},
  setTrendingData: () => {},
  setRecommendedData: () => {},
  setMovieFilter: () => {},
  setSeriesFilter: () => {},
  setBookmarkedMovieFilter: () => {},
  setBookmarkedSeriesFilter: () => {},
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [searchResult, setSearchResult] = useState<string>("");
  const [wholeData, setWholeData] = useState<Movie[]>([]);
  const [trendingData, setTrendingData] = useState<Movie[]>([]);
  const [recommendedData, setRecommendedData] = useState<Movie[]>([]);
  const [movieFilter, setMovieFilter] = useState<Movie[]>([]);
  const [seriesFilter, setSeriesFilter] = useState<Movie[]>([]);
  const [bookmarkedMovieFilter, setBookmarkedMovieFilter] = useState<Movie[]>(
    []
  );
  const [bookmarkedSeriesFilter, setBookmarkedSeriesFilter] = useState<Movie[]>(
    []
  );
  // const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("auth-token");
  //   if (token)
  //     (async () => {
  //       const response = await fetch("/api/movies/bookmarked", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": token,
  //         },
  //       });
  //       const bookmarkedIds = await response.json();
  //     })();
  // }, [router]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();

      const token = localStorage.getItem("auth-token");
      if (token) {
        const response = await fetch("/api/movies/bookmarked", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        const bookmarkedIds = await response.json();

        const transfromedData = data.map((item: Movie) => {
          if (bookmarkedIds.find((id: string) => item.id == id)) {
            item.isBookmarked = true;
          } else {
            item.isBookmarked = false;
          }
          return item;
        });
        setWholeData(transfromedData);
        const filteredData5 = data.filter(
          (item: Movie) =>
            item.category == "Movie" &&
            bookmarkedIds.find((id: string) => item.id == id)
        );
        setBookmarkedMovieFilter(filteredData5);
        const filteredData6 = data.filter(
          (item: Movie) =>
            item.category == "TV Series" &&
            bookmarkedIds.find((id: string) => item.id == id)
        );
        setBookmarkedSeriesFilter(filteredData6);
      }

      const filteredData = data.filter((item: Movie) => item.isTrending);
      setTrendingData(filteredData);
      const filteredData2 = data.filter((item: Movie) => !item.isTrending);
      setRecommendedData(filteredData2);
      const filteredData3 = data.filter(
        (item: Movie) => item.category == "Movie"
      );
      setMovieFilter(filteredData3);
      const filteredData4 = data.filter(
        (item: Movie) => item.category == "TV Series"
      );
      setSeriesFilter(filteredData4);
    })();
  }, [router]);

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
          movieFilter,
          setMovieFilter,
          seriesFilter,
          setSeriesFilter,
          bookmarkedMovieFilter,
          setBookmarkedMovieFilter,
          bookmarkedSeriesFilter,
          setBookmarkedSeriesFilter,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    );
  }
}
