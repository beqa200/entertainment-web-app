import { MyContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import RegularMovie from "./RegularMovie";
import Movie from "./TrendingMovie";
export default function SearchedContent({ data }: { data: Movie[] }) {
  const [searchedData, setSearchData] = useState<Movie[]>();
  const context = useContext(MyContext);
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        context?.searchResult?.toLocaleLowerCase() ==
        item.title.slice(0, context?.searchResult?.length).toLocaleLowerCase()
    );
    setSearchData([...filtered]);
  }, [context?.searchResult]);
  return (
    <RecommendedWrapper>
      <h2 className="heading">
        Found {searchedData?.length} results for `{context?.searchResult}`
      </h2>
      <div className="movies">
        {searchedData?.map((item: Movie, index) => (
          <RegularMovie
            movie={item}
            index={context.wholeData.indexOf(item)}
            key={item.id}
          />
        ))}
      </div>
    </RecommendedWrapper>
  );
}

const RecommendedWrapper = styled.section`
  margin-top: 24px;

  .heading {
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #ffffff;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 24px;
    margin-bottom: 61px;
  }
`;
