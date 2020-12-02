import Head from "next/head";

import esCommon from "../locales/es/common.json";
import locations from "../locales/es/map.json";
import MapPage from "../components/MapPage";

function Map({ config, locations }) {
  return (
    <>
      <Head>
        <title>{config.map} | MAMBO Viajero</title>
        <link rel="stylesheet" href="/css/leaflet.css" />
      </Head>
      <MapPage config={config} locations={locations} />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: { config: esCommon, locations },
  };
};

export default Map;
