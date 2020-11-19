import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import KnowMoreComponent from "../components/KnowMoreGrid";
import Footer from "../components/Footer";

export default function KnowMore({ config }) {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <GlobalStyles />
      <Header />
      <KnowMoreComponent />
      {/* <Footer /> */}
    </>
  );
}
