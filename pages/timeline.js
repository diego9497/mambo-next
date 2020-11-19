import Head from "next/head";
import TimelineComponent from "../components/Timeline";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";

const Timeline = ({ config }) => {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
      </Head>
      <TimelineComponent />
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
