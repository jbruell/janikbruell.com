import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@components";
import { CurrentSectionProvider } from "src/context/CurrentSection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentSectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentSectionProvider>
  );
}

export default MyApp;
