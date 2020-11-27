import Head from "next/head";
import TimelineComponent from "../components/Timeline";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";

import esTime from "../locales/es/timeline.json";
import enTime from "../locales/en/timeline.json";

const Timeline = ({ config, timeline }) => {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
      </Head>
      <TimelineComponent config={config} timeline={timeline} />
    </>
  );
};

// export const getStaticProps = ({ locale }) => {
//   const langCommon = { es: esCommon, en: enCommon };
//   const config = langCommon[locale];
//   const langTime = { es: esTime, en: enTime };
//   const timeline = langTime[locale];
//   return {
//     props: { config, timeline },
//   };
// };

export const getStaticProps = () => {
  return {
    props: { config: esCommon, timeline: esTime, index: true },
  };
};

export default Timeline;
