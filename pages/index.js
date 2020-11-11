import Header from "../components/Header";
import Masonry from "../components/Masonry";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MAMBO Viajero</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Masonry />
    </>
  );
}
