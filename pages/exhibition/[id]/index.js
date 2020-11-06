import Exhibition from "../../../components/Exhibition";
import Header from "../../../components/Header";
import { exhibitions } from "../../../data";
import GlobalStyles from "../../../styles/GlobalStyles";

const ExhibitionPage = (props) => {
  console.log(props);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Exhibition {...props} />
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

export default ExhibitionPage;
