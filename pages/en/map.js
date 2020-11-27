import Head from "next/head";

import enCommon from "../../locales/en/common.json";
import MapPage from "../../components/MapPage";

function Map({ config, locale }) {
  return (
    <>
      <Head>
        <title>{config.map} | MAMBO Viajero</title>
      </Head>
      <MapPage config={config} locale={locale} />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: { config: enCommon, index: true, locale: "en" },
  };
};

export default Map;
