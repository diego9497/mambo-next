import React from "react";
import Exhibition from "../../../components/Exhibition";
import Head from "next/head";

import es from "../../../locales/es/data.json";
import en from "../../../locales/en/data.json";
import esCommon from "../../../locales/es/common.json";
import enCommon from "../../../locales/en/common.json";

const Detail = ({ exhibition, config }) => {
  return (
    <>
      <Head>
        <title>{exhibition.title} | MAMBO Viajero</title>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/react-slidy/lib/styles.css"
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Exhibition exhibition={exhibition} config={config} />
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
//     props: { exhibition, config },
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
    props: { exhibition, config: esCommon },
  };
};

export default Detail;
