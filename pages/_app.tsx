import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "src/store";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
