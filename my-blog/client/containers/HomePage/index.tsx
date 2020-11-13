import React, { ReactElement } from "react";
import Head from "next/head";
import { HomeWrap } from "./styles";

interface Props {}

export default function HomePage({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrap>Hello, there!</HomeWrap>
    </>
  );
}
