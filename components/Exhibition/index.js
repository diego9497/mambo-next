import ExhibitionPrimary from "../ExhibitionPrimary";
import ExhibitionSecondary from "../ExhibitionSecondary";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function Exhibition({ exhibition, config }) {
  const ref = useRef();
  const router = useRouter();

  useEffect(() => {
    if (router.query.content2 === "true") {
      ref.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <ExhibitionPrimary exhibition={exhibition} config={config} />
      <div ref={ref}></div>
      <ExhibitionSecondary exhibition={exhibition} config={config} />
    </>
  );
}

export default Exhibition;
