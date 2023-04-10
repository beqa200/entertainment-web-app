import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
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
    console.log(dataClone[index].id);

    await fetch(`/api/movies/${dataClone[index].id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBookmarked: dataClone[index].isBookmarked }),
    });
  };
  return (
    <TrendingMovieWrapper>
      <Image
        className="cover"
        src={
          movie.isTrending
            ? movie.thumbnail.trending.small.replace("./assets", "")
            : movie.thumbnail.regular.small.replace("./assets", "")
        }
        width={240}
        height={160}
        alt={movie.title}
        blurDataURL="/logo.svg"
      />

      <div className="bookmark" onClick={bookMark}>
        <Image
          src={
            movie.isBookmarked
              ? "/icon-bookmark-full.svg"
              : "/icon-bookmark-empty.svg"
          }
          width={11}
          height={14}
          alt="not saved"
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
    }
  }
`;
