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
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
