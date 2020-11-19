import ExhibitionPrimary from "../ExhibitionPrimary";
import ExhibitionSecondary from "../ExhibitionSecondary";
import KnowMore from "../KnowMore";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function Exhibition({ exhibition, config }) {
  const content2 = useRef();
  const content3 = useRef();
  const router = useRouter();

  useEffect(() => {
    if (router.query.content2 === "true") {
      content2.current.scrollIntoView();
    }
    if (router.query.content3 === "true") {
      content3.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <ExhibitionPrimary exhibition={exhibition} config={config} />
      <div ref={content2}></div>
      <ExhibitionSecondary exhibition={exhibition} config={config} />
      <div ref={content3}></div>
      <KnowMore exhibition={exhibition} config={config} />
    </>
  );
}

export default Exhibition;
