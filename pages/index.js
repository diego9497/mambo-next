import Head from "next/head";
import Masonry from "../components/Masonry";

import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";

function Home({ config }) {
  return (
    <>
      <Head>
        <title>MAMBO Viajero</title>
      </Head>
      <Masonry config={config} />
    </>
  );
}

export const getStaticProps = ({ locale }) => {
  const langCommon = { es: esCommon, en: enCommon };
  const config = langCommon[locale];
  return {
    props: { config, index: true },
  };
};

export default Home;
