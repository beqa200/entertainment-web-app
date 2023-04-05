import styled from "styled-components";
import Image from "next/image";
export default function Search() {
  return (
    <SearchWrapper>
      <Image src="/icon-search.svg" width={18} height={18} alt="search logo" />
      <input placeholder="Search for movies or TV series" />
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
