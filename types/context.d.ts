interface contextProps {
  searchResult: string;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  wholeData: Movie[];
  setWholeData: React.Dispatch<React.SetStateAction<Movie[]>>;
  trendingData: Movie[];
  setTrendingData: React.Dispatch<React.SetStateAction<Movie[]>>;
  recommendedData: Movie[];
  setRecommendedData: React.Dispatch<React.SetStateAction<Movie[]>>;
}
