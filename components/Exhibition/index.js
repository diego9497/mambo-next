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
      setTimeout(() => {
        content2.current.scrollIntoView();
      }, 0);
    }
    if (router.query.content3 === "true") {
      setTimeout(() => {
        content3.current.scrollIntoView();
      }, 0);
    }
  }, []);

  return (
    <>
      <ExhibitionPrimary exhibition={exhibition} config={config} />
      <div ref={content2}></div>
      <ExhibitionSecondary exhibition={exhibition} config={config} />
      <KnowMore exhibition={exhibition} config={config} />
      <div ref={content3}></div>
    </>
  );
}

export default Exhibition;
