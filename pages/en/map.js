import Head from "next/head";

import enCommon from "../../locales/en/common.json";
import locations from "../../locales/en/map.json";
import MapPage from "../../components/MapPage";

function Map({ config, locale, locations }) {
  return (
    <>
      <Head>
        <title>{config.map} | MAMBO Viajero</title>
        <link rel="stylesheet" href="/css/leaflet.css" />
      </Head>
      <MapPage config={config} locations={locations} locale={locale} />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: { config: enCommon, locations, locale: "en" },
  };
};

export default Map;
