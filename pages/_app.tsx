import Layout from "@/layouts/Layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
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
  const router = useRouter();

  useEffect(() => {
    (async () => {
      //get movies from api
      const response = await fetch("/api/movies");
      const data = await response.json();

      //get auth token from localstorage
      const token = localStorage.getItem("auth-token");

      //get bookmarked movies and series id if token is valid
      if (token) {
        const response = await fetch("/api/movies/bookmarked", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });

        const bookmarkedIds = await response.json();

        //transforming data according to user's bookmarked movies
        const transfromedData: Movie[] = data.map((item: Movie) => {
          if (bookmarkedIds.find((id: string) => item.id == id)) {
            item.isBookmarked = true;
          } else {
            item.isBookmarked = false;
          }
          return item;
        });
        setWholeData(transfromedData);

        //filter movies with different criterias
        const bookmarkMovies = transfromedData.filter(
          (item: Movie) => item.category == "Movie" && item.isBookmarked
        );
        setBookmarkedMovieFilter(bookmarkMovies);

        const bookmarkSeries = data.filter(
          (item: Movie) => item.category == "TV Series" && item.isBookmarked
        );
        setBookmarkedSeriesFilter(bookmarkSeries);

        const trendings = transfromedData.filter(
          (item: Movie) => item.isTrending
        );
        setTrendingData(trendings);

        const recommends = transfromedData.filter(
          (item: Movie) => !item.isTrending
        );
        setRecommendedData(recommends);

        const movies = transfromedData.filter(
          (item: Movie) => item.category == "Movie"
        );
        setMovieFilter(movies);

        const series = transfromedData.filter(
          (item: Movie) => item.category == "TV Series"
        );
        setSeriesFilter(series);
      }
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
          <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link href="./logo.svg" rel="icon"/>
      </Head>
        <Layout>
         
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
    );
  }
}
