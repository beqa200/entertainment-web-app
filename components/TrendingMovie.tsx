import styled from "styled-components";
import Image from "next/image";
import { useContext, useState } from "react";
import { MyContext } from "@/pages/_app";

export default function Movie({
  movie,
  index,
}: {
  movie: Movie;
  index: number;
}) {
  const context = useContext(MyContext);
  const bookMark = async () => {
    const dataClone = [...context.wholeData];
    dataClone[index].isBookmarked = !dataClone[index].isBookmarked;
    context.setWholeData(dataClone);

    await fetch(`/api/movies/${dataClone[index].id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBookmarked: dataClone[index].isBookmarked }),
    });
  };

  const [isHover, setIsHover] = useState(false);
  const [isHoverbookmark, setIsHoverbookmark] = useState(false);

  return (
    <TrendingMovieWrapper
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Image
        className="cover mobile"
        src={movie.thumbnail.trending.small.replace("./assets", "")}
        width={240}
        height={160}
        alt={movie.title}
      />

      <Image
        className="cover tablet"
        src={movie.thumbnail.trending.large.replace("./assets", "")}
        width={470}
        height={230}
        alt={movie.title}
      />

      {isHover && !isHoverbookmark && (
        <>
          <div className="play">
            <Image src={"/icon-play.svg"} width={30} height={30} alt={"play"} />
            <p>Play</p>
          </div>
          <div className="hover"></div>
        </>
      )}

      <div
        className="bookmark"
        onClick={bookMark}
        style={isHoverbookmark ? { backgroundColor: "white" } : {}}
        onMouseOver={() => setIsHoverbookmark(true)}
        onMouseOut={() => setIsHoverbookmark(false)}
      >
        <Image
          src={
            movie.isBookmarked
              ? "/icon-bookmark-full.svg"
              : "/icon-bookmark-empty.svg"
          }
          width={11}
          height={14}
          alt="not saved"
          style={
            isHoverbookmark
              ? {
                  filter:
                    "invert(0%) sepia(12%) saturate(7478%) hue-rotate(130deg) brightness(4%) contrast(101%)",
                }
              : {}
          }
        />
      </div>

      <div className="info">
        <div className="details">
          <p className="year">{movie.year}</p>
          <span className="circle"></span>

          <Image
            src={
              movie.category == "Movie"
                ? "/icon-category-movie.svg"
                : "/icon-category-tv.svg"
            }
            width={12}
            height={12}
            alt="movie icon"
          />
          <p>{movie.category}</p>
          <span className="circle"></span>
          <p>{movie.rating}</p>
        </div>
        <h2 className="title">{movie.title}</h2>
      </div>
    </TrendingMovieWrapper>
  );
}

const TrendingMovieWrapper = styled.div`
  min-width: 240px;
  height: 140px;
  background-size: cover;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  
  .tablet {
    display: none;
  }

  @media (min-width: 768px) {
    min-width: 470px;
    height: 230px;

    .mobile {
      display: none;
    }

    .tablet {
      display: block;
    }
  }

  .play {
    display: none;
    display: flex;
    align-items: center;
    gap: 19px;
    padding: 9px 9px 10px 9px;
    background: rgba(255, 255, 255, 0.25);
    width: 117px;
    mix-blend-mode: normal;
    border-radius: 28.5px;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    z-index: 3;
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      color: #ffffff;
    }
  }

  .hover {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    border-radius: 9px;
  }

  .cover {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .bookmark {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 8px;
    top: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 10;
  }

  .info {
    position: absolute;
    bottom: 16px;
    left: 16px;
    .details {
      display: flex;
      align-items: center;
      opacity: 0.75;
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
      gap: 8px;

      @media (min-width: 768px) {
        font-size: 15px;
      }

      .circle {
        width: 3.5px;
        height: 3px;
        border-radius: 50%;
        background: #ffffff;
      }
    }
    .title {
      color: white;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      margin-top: 5px;

      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;
