import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const path = useRouter().asPath;

  return (
    <HeaderWrapper>
      <Image
        className="logo"
        src={"/logo.svg"}
        width={25}
        height={20}
        alt="logo"
      />

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

      <Image
        className="avatar"
        src={"/image-avatar.png"}
        width={24}
        height={24}
        alt="avatar"
      />
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

  @media (min-width: 768px) {
    width: 93%;
    margin: 23px auto;
    border-radius: 10px;

    .logo {
      width: 32px;
      height: 25.6px;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    width: 96px;
    height: 93%;
    position: fixed;
    padding: 35px 31px;
    left: 32px;
  }

  nav {
    display: flex;
    gap: 24px;

    @media (min-width: 768px) {
      img {
        width: 20px;
        height: 20px;
      }
    }
    @media (min-width: 1440px) {
      flex-direction: column;

      img {
        &:hover {
          filter: invert(41%) sepia(82%) saturate(3512%) hue-rotate(337deg) brightness(107%) contrast(98%);
        }
      }
    }
  }

  .avatar {
    border: 1px solid #ffffff;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .avatar {
      width: 32px;
      height: 32px;
    }
  }

  .active {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
      brightness(205%) contrast(100%);
  }
`;
