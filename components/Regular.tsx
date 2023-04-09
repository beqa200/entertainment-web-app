import { MyContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import RegularMovie from "./RegularMovie";
import Movie from "./TrendingMovie";
export default function Recommended() {
  const context = useContext(MyContext);

  return (
    <RecommendedWrapper>
      <h2 className="heading">Recommended for you</h2>
      <div className="movies">
        {context.recommendedData?.map((item: Movie) => (
          <RegularMovie
            movie={item}
            index={context.wholeData?.indexOf(item)}
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
