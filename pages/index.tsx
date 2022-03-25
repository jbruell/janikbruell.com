import { About, Header, Hero } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
        <meta name="description" content="The main page of my website" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Home;
