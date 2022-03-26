import "src/styles/main.scss";
import type { AppProps } from "next/app";
import { CurrentSectionProvider } from "src/context/CurrentSection";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentSectionProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CurrentSectionProvider>
  );
}

export default MyApp;
