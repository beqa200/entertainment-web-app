import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TrendingMovie from "./TrendingMovie";
import { MyContext } from "@/pages/_app";
import { StyledHeading } from "@/styled-components";
export default function Slider() {
  const context = useContext(MyContext);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  //scroll effect
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
       
        onMouseOver={() => {
          setIsClicked(true)
        }}

        onMouseOut={() => {
          setIsClicked(false)
        }}
      >
        {context.trendingData?.map((item: Movie, index) => (
          <TrendingMovie
            movie={item}
            index={context.wholeData?.findIndex((obj) => obj.id === item.id)}
            key={item.id}
          />
        ))}
      </div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.section`
  margin-top: 26px;
  height: 180px;

  @media (min-width: 768px) {
    min-height: 270px;
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
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 768px) {
      min-height: 230px;
      padding: 0 25px;
    }

    @media (min-width: 1440px) {
      left: 128px;
      padding: 0 35px;
      width: 92%;
    }
  }
`;
