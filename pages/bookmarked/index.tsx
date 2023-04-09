import Head from "next/head";
import Image from "next/image";
import Slider from "@/components/Slider";
import Regular from "@/components/Regular";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../_app";
import SearchedContent from "@/components/SearchedContent";
import { StyledHeading } from "@/styled-components";

export default function movies() {
  const context = useContext(MyContext);

  return (
    <>
      <Head>
        <title>Entertainment Web App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!context?.searchResult ? (
        <>
          {context.bookmarkedMovieFilter.length != 0 && (
            <StyledHeading>Bookmarked Movies</StyledHeading>
          )}
          <Regular data={context.bookmarkedMovieFilter} />
          {context.bookmarkedSeriesFilter.length != 0 && (
            <StyledHeading>Bookmarked TV Series</StyledHeading>
          )}

          <Regular data={context.bookmarkedSeriesFilter} />
        </>
      ) : (
        <SearchedContent
          data={[
            ...context.bookmarkedMovieFilter,
            ...context.bookmarkedSeriesFilter,
          ]}
        />
      )}
    </>
  );
}