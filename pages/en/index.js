import Head from "next/head";
import Masonry from "../../components/Masonry";

import enCommon from "../../locales/en/common.json";

function Home({ config, locale }) {
  return (
    <>
      <Head>
        <title>MAMBO Viajero</title>
      </Head>
      <Masonry config={config} locale={locale} />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: { config: enCommon, index: true, locale: "en" },
  };
};

export default Home;
