import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Bookmark from "./Bookmark";
export default function Slider() {
  const [trendingData, setTrendingData] = useState<Movie[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/movies");
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
        {trendingData?.map((item: Movie) => (
          <div
            className="slide"
            key={Math.random()}
            style={{
              backgroundImage: `url(${item.thumbnail.trending.large.replace(
                "./assets",
                ""
              )})`,
            }}
          >
            <Bookmark isBookMarked={item.isBookmarked} />
          </div>
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

    .slide {
      min-width: 240px;
      height: 140px;
      background-size: cover;
      border-radius: 8px;
      position: relative;
    }
  }
`;
