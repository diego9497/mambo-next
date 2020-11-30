import Head from "next/head";
import TimelineComponent from "../components/Timeline";

import esCommon from "../locales/es/common.json";

import esTime from "../locales/es/timeline.json";

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

export const getStaticProps = () => {
  return {
    props: { config: esCommon, timeline: esTime },
  };
};

export default Timeline;
