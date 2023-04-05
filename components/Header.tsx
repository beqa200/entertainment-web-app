import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <HeaderWrapper>
      <Image src={"/logo.svg"} width={32} height={25.5} alt="logo" />

      <nav>
        <Link href="">
          <Image
            src={"/icon-nav-home.svg"}
            width={16}
            height={16}
            alt="home logo"
          />
        </Link>
        <Link href="">
          <Image
            src={"/icon-nav-movies.svg"}
            width={16}
            height={16}
            alt="movies logo"
          />
        </Link>
        <Link href="">
          <Image
            src={"/icon-nav-tv-series.svg"}
            width={16}
            height={16}
            alt="tv series logo"
          />
        </Link>
        <Link href="">
          <Image
            src={"/icon-nav-bookmark.svg"}
            width={16}
            height={16}
            alt="bookmark logo"
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
`;
