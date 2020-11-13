import { ThemeProvider } from "styled-components";
import GlobalStyle from "client/styles/global";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
