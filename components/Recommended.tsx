import { useEffect, useState } from "react";
import styled from "styled-components";
import RegularMovie from "./RegularMovie";
import Movie from "./TrendingMovie";
export default function Recommended({
  recommendedData,
  setRecommendedData,
  wholeData,
  setWholeData,
}: {
  recommendedData: Movie[];
  setRecommendedData: (recommendedData: Movie[]) => void;
  wholeData: Movie[];
  setWholeData: (wholeData: Movie[]) => void;
}) {
  return (
    <RecommendedWrapper>
      <h2 className="heading">Recommended for you</h2>
      <div className="movies">
        {recommendedData?.map((item: Movie, index) => (
          <RegularMovie
            movie={item}
            data={wholeData}
            setData={setWholeData}
            index={wholeData?.indexOf(item)}
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
