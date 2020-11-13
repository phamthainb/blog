import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {}

export default function AboutPage({}: Props): ReactElement {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>AboutPage</main>
      </div>
    </div>
  );
}
