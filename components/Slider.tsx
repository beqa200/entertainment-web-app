import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Movie from "./Movie";
export default function Slider() {
  const [trendingData, setTrendingData] = useState<Movie[]>();

  
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();
      const filteredData = data.filter((item: Movie) => item.isTrending);
      setTrendingData(filteredData);
    })();
  }, []);

  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
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
      <h2>Trending</h2>
      <div
        className="slider"
        ref={scrollableRef}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        {trendingData?.map((item: Movie, index) => (
          <Movie movie={item} trendingData={trendingData} setTrendingData={setTrendingData} index={index}/>
        ))}
      </div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  margin-top: 26px;
  h2 {
    font-size: 20px;
    line-height: 25px;
    font-weight: 300;
    letter-spacing: -0.3125px;
    color: #ffffff;
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

 
  }
`;
