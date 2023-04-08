import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const path = useRouter().asPath;

  return (
    <HeaderWrapper>
      <Image src={"/logo.svg"} width={32} height={25.5} alt="logo" />

      <nav>
        <Link href="/">
          <Image
            src={"/icon-nav-home.svg"}
            width={16}
            height={16}
            alt="home logo"
            className={path == "/" ? "active" : ""}
          />
        </Link>
        <Link href="/movies">
          <Image
            src={"/icon-nav-movies.svg"}
            width={16}
            height={16}
            alt="movies logo"
            className={path == "/movies" ? "active" : ""}
          />
        </Link>
        <Link href="/tv-series">
          <Image
            src={"/icon-nav-tv-series.svg"}
            width={16}
            height={16}
            alt="tv series logo"
            className={path == "/tv-series" ? "active" : ""}
          />
        </Link>
        <Link href="/bookmarked">
          <Image
            src={"/icon-nav-bookmark.svg"}
            width={16}
            height={16}
            alt="bookmark logo"
            className={path == "/bookmarked" ? "active" : ""}
          />
        </Link>
      </nav>

      <Image src={"/image-avatar.png"} width={24} height={24} alt="avatar" />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background: #161d2f;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 24px;
  }

  .active {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
      brightness(205%) contrast(100%);
  }
`;
