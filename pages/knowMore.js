import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

const KnowMore = ({ config }) => {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
      </Head>
      <GlobalStyles />
      <Header />

      <Footer />
    </>
  );
};
