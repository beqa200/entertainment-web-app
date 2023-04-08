import styled from "styled-components";
import Image from "next/image";

export default function Movie({
  movie,
  trendingData,
  setTrendingData,
  index,
}: {
  movie: Movie;
  trendingData: Movie[];
  setTrendingData: (trendingData: Movie[]) => void;
  index: number;
}) {
  const bookMark = () => {
    const dataClone = [...trendingData];
    dataClone[index].isBookmarked = !dataClone[index].isBookmarked;
    setTrendingData(dataClone);

    
  };
  return (
    <MovieWrapper>
      <Image
        className="cover"
        src={movie.thumbnail.trending.small.replace("./assets", "")}
        width={470}
        height={230}
        alt={movie.title}
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
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
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
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      margin-top: 5px;
    }
  }
`;
