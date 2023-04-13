import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
export default function Search() {
  const context = useContext(MyContext);

  const path = useRouter().asPath;
  
  return (
    <SearchWrapper>
      <Image src="/icon-search.svg" width={18} height={18} alt="search logo" />
      <input
        placeholder={`Search for ${
          path == "/"
            ? "movies or TV series"
            : path == "/movies"
            ? "movies"
            : path == "/tv-series"
            ? "TV series"
            : path == "/bookmarked"
            ? "bookmarked shows"
            : ""
        }`}
        onChange={(e) => {
          context.setSearchResult(e.target.value);
        }}
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: start;
  gap: 16px;
  margin-top: 26px;

  @media (min-width: 768px) {
    img {
      margin-top: -5px;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 65px;
  }

  input {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    mix-blend-mode: normal;
    padding-bottom: 15px;
    border: none;
    caret-color: #fc4747;
    &::placeholder {
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border-bottom: 1px solid #5a698f;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;
