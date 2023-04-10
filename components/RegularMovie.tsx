import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
export default function Movie({
  movie,
  index,
}: {
  movie: Movie;
  index: number | undefined;
}) {
  const context = useContext(MyContext);
  const bookMark = async () => {
    if (index != undefined) {
      const dataClone = [...context.wholeData];
      console.log(index);
      dataClone[index].isBookmarked = !dataClone[index].isBookmarked;
      context.setWholeData(dataClone);

      await fetch(`/api/movies/${dataClone[index].id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isBookmarked: dataClone[index].isBookmarked }),
      });
    }
  };

  return (
    <RegularMovieWrapper>
      <Image
        className="cover mobile"
        src={movie.thumbnail.regular.medium.replace("./assets", "")}
        width={164}
        height={110}
        alt={movie.title}
      />

      <Image
        className="cover tablet"
        src={movie.thumbnail.regular.medium.replace("./assets", "")}
        width={220}
        height={140}
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
    </RegularMovieWrapper>
  );
}

const RegularMovieWrapper = styled.div`
  width: 220px;
  height: 190px;
  background-size: cover;
  border-radius: 8px;
  position: relative;

  .tablet {
    display: none;
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }

    .tablet {
      display: block;
    }
  }

  .cover {
    z-index: -1;
    width: 100%;
    height: 110px;
    border-radius: 8px;

    @media (min-width: 768px) {
      height: 140px;
    }
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
        font-size: 13px;
        margin-top: 8px;
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
        font-size: 18px;
      }
    }
  }
`;
