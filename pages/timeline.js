import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TimelineComponent from "../components/Timeline";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";

const Timeline = ({ config }) => {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <GlobalStyles />
      <Header />
      <TimelineComponent />
      <Footer exhibition={{}} config={config} />
    </>
  );
};

export const getStaticProps = ({ locale }) => {
  const langCommon = { es: esCommon, en: enCommon };
  const config = langCommon[locale];
  return {
    props: { config },
  };
};

export default Timeline;
