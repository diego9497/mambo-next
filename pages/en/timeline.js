import Head from "next/head";
import TimelineComponent from "../../components/Timeline";

import enCommon from "../../locales/en/common.json";
import enTime from "../../locales/en/timeline.json";

const Timeline = ({ config, timeline, locale }) => {
  return (
    <>
      <Head>
        <title>{config?.timeline} | MAMBO Viajero</title>
      </Head>
      <TimelineComponent config={config} timeline={timeline} locale={locale} />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: { config: enCommon, timeline: enTime, index: true, locale: "en" },
  };
};

export default Timeline;
