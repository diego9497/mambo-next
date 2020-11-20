import Head from "next/head";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";
import MapPage from "../components/MapPage";

function Map({ config }) {
  return (
    <>
      <Head>
        <title>{config.map} | MAMBO Viajero</title>
      </Head>
      <MapPage config={config} />
    </>
  );
}
export const getStaticProps = ({ locale }) => {
  const langCommon = { es: esCommon, en: enCommon };
  const config = langCommon[locale];
  return {
    props: { config },
  };
};

export default Map;
