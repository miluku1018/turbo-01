import theme from "@configs/theme";
import { ThemeProvider } from "@mui/material";
import "@styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const component = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
      {/*
      <ApolloProvider client={client}>
        <AuthProvider>
          <NoticeProvider>

            <Snackbar />
          </NoticeProvider>
        </AuthProvider>
      </ApolloProvider> */}
    </>
  );
}

export default MyApp;
