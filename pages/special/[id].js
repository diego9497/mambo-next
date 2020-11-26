import Head from "next/head";

import es from "../../locales/es/special.json";
import en from "../../locales/en/special.json";
import esCommon from "../../locales/es/common.json";
import enCommon from "../../locales/en/common.json";
import ExhibitionSpecial from "../../components/ExhibitionSpecial";

const SpecialPage = ({ exhibition, config }) => {
  return (
    <>
      <Head>
        <title>{exhibition.title} | MAMBO</title>
      </Head>
      <ExhibitionSpecial exhibition={exhibition} config={config} />
    </>
  );
};

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
  console.log(paths);
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

export default SpecialPage;
