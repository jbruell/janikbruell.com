import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@components";
import { CurrentSectionProvider } from "src/context/CurrentSection";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentSectionProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CurrentSectionProvider>
  );
}

export default MyApp;
