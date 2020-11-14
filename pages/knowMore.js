import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KnowMoreGrid from "../components/KnowMoreGrid";

const KnowMore = () => {
  return (
    <>
      <Head>
        <title>| MAMBO Viajero</title>
      </Head>
      <GlobalStyles />
      <Header />
      <KnowMoreGrid />
      {/* <Footer /> */}
    </>
  );
};

export default KnowMore;
