import Head from "next/head";
import ExhibitionChoose from "../../../../components/ExhibitionChoose";

import en from "../../../../locales/en/data.json";
import enCommon from "../../../../locales/en/common.json";

const ExhibitionPage = ({ exhibition, config, locale }) => {
  return (
    <>
      <Head>
        <title>{exhibition.title} | MAMBO</title>
      </Head>
      <ExhibitionChoose
        exhibition={exhibition}
        config={config}
        locale={locale}
      />
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
    props: { exhibition, config: enCommon, choose: true, locale: "en" },
  };
};

export default ExhibitionPage;
