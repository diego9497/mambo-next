import Exhibition from "../../components/Exhibition";
import Header from "../../components/Header";
import GlobalStyles from "../../styles/GlobalStyles";

const ExhibitionPage = (props) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Exhibition />
    </>
  );
};

// ExhibitionPage.getStaticProps = () => {};

export default ExhibitionPage;
