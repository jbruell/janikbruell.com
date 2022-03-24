import { Hero } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
        <meta name="description" content="The main page of my website" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
