import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Movie from "./TrendingMovie";
import TrendingMovie from "./TrendingMovie";
import { MyContext } from "@/pages/_app";
import { StyledHeading } from "@/styled-components";
export default function Slider() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const context = useContext(MyContext);
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isClicked) {
      intervalId = setInterval(() => {
        scrollableRef.current?.scrollBy(1, 0);
      }, 20);
    }

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isClicked]);

  return (
    <SliderWrapper>
      <StyledHeading>Trending</StyledHeading>
      <div
        className="slider"
        ref={scrollableRef}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        {context.trendingData?.map((item: Movie, index) => (
          <TrendingMovie movie={item} index={context.wholeData?.findIndex(obj => obj.id === item.id)} key={item.id} />
        ))}
      </div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.section`
  margin-top: 26px;
  height: 180px;

  
  @media (min-width: 768px) {
    min-height: 300px;
  }

 

  .slider {
    display: flex;
    gap: 16px;
    height: 140px;
    width: 100%;
    position: absolute;
    left: 0;
    padding: 0 16px;
    overflow-x: scroll;
    margin-top: 16px;

    @media (min-width: 768px) {
    min-height: 230px;
  }

    @media (min-width: 768px) {
      padding: 0 25px;
      margin-top: 24px;
    }
  }
`;
