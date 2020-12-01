import Head from "next/head";

import en from "../../../locales/en/special.json";
import enCommon from "../../../locales/en/common.json";
import ExhibitionSpecial from "../../../components/ExhibitionSpecial";

const SpecialPage = ({ exhibition, config, locale }) => {
  return (
    <>
      <Head>
        <title>{exhibition.title} | MAMBO</title>
      </Head>
      <ExhibitionSpecial
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
    props: { exhibition, config: enCommon, locale: "en" },
  };
};
export default SpecialPage;
