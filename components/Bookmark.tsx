import Image from "next/image";
import styled from "styled-components";
type PropsType = {
  isBookMarked: Boolean;
};
export default function Bookmark({ isBookMarked }: PropsType) {
  return (
    <BookmarkWrapper className="bookmark">
      <Image
        src={
          isBookMarked ? "/icon-bookmark-full.svg" : "/icon-bookmark-empty.svg"
        }
        width={11}
        height={14}
        alt="not saved"
      />
    </BookmarkWrapper>
  );
}

const BookmarkWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: rgba(0, 0, 0, 0.5);
`;
