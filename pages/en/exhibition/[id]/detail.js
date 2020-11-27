import React from "react";
import Head from "next/head";
import Exhibition from "../../../../components/Exhibition";

import en from "../../../../locales/en/data.json";
import enCommon from "../../../../locales/en/common.json";

const Detail = ({ exhibition, config, locale }) => {
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
      <Exhibition exhibition={exhibition} config={config} locale={locale} />
    </>
  );
};

export const getStaticPaths = () => {
  const paths = [];
  paths.push(
    ...en.map((exhibition) => ({
      params: { id: exhibition.id.toString() },
    }))
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const exhibition = en.find((exhibition) => exhibition.id == params.id);
  return {
    props: { exhibition, config: enCommon, locale: "en" },
  };
};

export default Detail;
