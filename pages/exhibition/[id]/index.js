import Head from "next/head";
import ExhibitionChoose from "../../../components/ExhibitionChoose";

import es from "../../../locales/es/data.json";
import en from "../../../locales/en/data.json";
import esCommon from "../../../locales/es/common.json";
import enCommon from "../../../locales/en/common.json";

const ExhibitionPage = ({ exhibition, config }) => {
  return (
    <>
      <Head>
        <title>{exhibition.title} | MAMBO</title>
      </Head>
      <ExhibitionChoose exhibition={exhibition} config={config} />
    </>
  );
};

// export const getStaticPaths = ({ locales }) => {
//   const paths = [];

//   for (const locale of locales) {
//     paths.push(
//       ...es.map((exhibition) => ({
//         params: { id: exhibition.id.toString() },
//         locale,
//       }))
//     );
//   }
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = ({ locale, params }) => {
//   const langData = { es, en };
//   const langCommon = { es: esCommon, en: enCommon };
//   const exhibition = langData[locale].find(
//     (exhibition) => exhibition.id == params.id
//   );
//   const config = langCommon[locale];
//   return {
//     props: { exhibition, config, choose: true },
//   };
// };
export const getStaticPaths = () => {
  const paths = [];
  paths.push(
    ...es.map((exhibition) => ({
      params: { id: exhibition.id.toString() },
    }))
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const exhibition = es.find((exhibition) => exhibition.id == params.id);
  return {
    props: { exhibition, config: esCommon, choose: true },
  };
};

export default ExhibitionPage;
