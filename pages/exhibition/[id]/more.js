import Head from "next/head";
import KnowMore from "../../../components/KnowMore";

import es from "../../../locales/es/data.json";
import en from "../../../locales/en/data.json";
import esCommon from "../../../locales/es/common.json";
import enCommon from "../../../locales/en/common.json";

function More({ exhibition, config }) {
  return (
    <>
      <Head>
        <title>{config?.more} | MAMBO Viajero</title>
      </Head>
      <KnowMore exhibition={exhibition} config={config} />
    </>
  );
}

export const getStaticPaths = ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    paths.push(
      ...es.map((exhibition) => ({
        params: { id: exhibition.id.toString() },
        locale,
      }))
    );
  }
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = ({ locale, params }) => {
  const langData = { es, en };
  const langCommon = { es: esCommon, en: enCommon };
  const exhibition = langData[locale].find(
    (exhibition) => exhibition.id == params.id
  );
  const config = langCommon[locale];
  return {
    props: { exhibition, config },
  };
};

export default More;
