import { MyContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import RegularMovie from "./RegularMovie";
import Movie from "./TrendingMovie";

export default function Recommended({data}: {data: Movie[]}) {
  const context = useContext(MyContext);
  return (
    <RecommendedWrapper>
      <div className="movies">
        {data.map((item: Movie) => (
          <RegularMovie
            movie={item}
            index={context.wholeData?.findIndex(obj => obj.id === item.id)}
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

    @media (min-width: 768px) {
      gap: 29px;
    }

    @media (min-width: 1440px) {
      gap: 35px;
      padding-right: 20px;
    }
  }
`;
