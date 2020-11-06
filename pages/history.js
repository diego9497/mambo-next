import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import HistoryGrid from '../components/HistoryGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HistoryGrid />
      <Footer />
    </>
  );
}
