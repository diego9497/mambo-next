import Head from "next/head";

import enCommon from "../../locales/en/common.json";
import locations from "../../locales/en/map.json";
import MapPage from "../../components/MapPage";

function Map({ config, locale, locations }) {
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
