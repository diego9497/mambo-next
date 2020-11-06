import React from "react";
import Header from "../../../components/Header";
import HistoryGrid from "../../../components/HistoryGrid";
import { exhibitions } from "../../../data";
import GlobalStyles from "../../../styles/GlobalStyles";

const Detail = (props) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HistoryGrid {...props} />
    </>
  );
};

export const getStaticPaths = () => {
  const paths = exhibitions.map((exhibition) => ({
    params: { id: exhibition.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = ({ params }) => {
  const exhibition = exhibitions.find(
    (exhibition) => exhibition.id == params.id
  );
  return {
    props: exhibition,
  };
};

export default Detail;
