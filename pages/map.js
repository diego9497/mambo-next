import Head from "next/head";

import esCommon from "../locales/es/common.json";
import locations from "../locales/es/map.json";
import MapPage from "../components/MapPage";

function Map({ config, locations }) {
  return (
    <>
      <Head>
        <title>{config.map} | MAMBO Viajero</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
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
