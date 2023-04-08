import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
export default function Search() {
  const path = useRouter().asPath;
  const context = useContext(MyContext);
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
          context?.setSearchResult(e.target.value);
        }}
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 26px;
  input {
    width: 214px;
    height: 100%;
    background-color: transparent;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    border: none;

    &:focus {
      outline: none;
    }
  }

  img {
  }
`;
