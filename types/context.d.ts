interface contextProps {
  searchResult: string;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  wholeData: Movie[];
  setWholeData: React.Dispatch<React.SetStateAction<Movie[]>>;
  trendingData: Movie[];
  setTrendingData: React.Dispatch<React.SetStateAction<Movie[]>>;
  recommendedData: Movie[];
  setRecommendedData: React.Dispatch<React.SetStateAction<Movie[]>>;
  movieFilter: Movie[];
  setMovieFilter: React.Dispatch<React.SetStateAction<Movie[]>>;
  seriesFilter: Movie[];
  setSeriesFilter: React.Dispatch<React.SetStateAction<Movie[]>>;
  bookmarkedMovieFilter: Movie[];
  setBookmarkedMovieFilter: React.Dispatch<React.SetStateAction<Movie[]>>;
  bookmarkedSeriesFilter: Movie[];
  setBookmarkedSeriesFilter: React.Dispatch<React.SetStateAction<Movie[]>>;
}
