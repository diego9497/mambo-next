import Header from "../components/Header";
import Masonry from "../components/Masonry";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";

function Home({ config }) {
  return (
    <>
      <Head>
        <title>MAMBO Viajero</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Masonry config={config} />
    </>
  );
}

export const getStaticProps = ({ locale }) => {
  const langCommon = { es: esCommon, en: enCommon };
  const config = langCommon[locale];
  return {
    props: { config },
  };
};

export default Home;
