import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MAMBO Viajero</title>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <GlobalStyles />
      {pageProps.config || pageProps.exhibition ? (
        <Header config={pageProps.config} locale={pageProps.locale} />
      ) : null}
      <Component {...pageProps} />
      {pageProps.config || pageProps.exhibition ? (
        <Footer
          index={pageProps.index}
          choose={pageProps.choose}
          config={pageProps.config}
          locale={pageProps.locale}
          exhibition={pageProps.exhibition || {}}
        />
      ) : null}
    </>
  );
}
