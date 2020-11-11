
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TimelineComponent from '../components/Timeline'

const Timeline = ({ exhibition, config }) => {
  return (
    <>
      <Head>
        <title>{exhibition?.title} | MAMBO Viajero</title>
      </Head>
      <GlobalStyles />
      <Header />
      <TimelineComponent />
      {/* <Footer exhibition={exhibition} config={config} /> */}

    </>
  );
};

export default Timeline

