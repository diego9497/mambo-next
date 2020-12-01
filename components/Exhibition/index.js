import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ExhibitionPrimary from "../ExhibitionPrimary";
import ExhibitionSecondary from "../ExhibitionSecondary";
import KnowMore from "../KnowMore";

function Exhibition({ exhibition, config }) {
  return (
    <>
      <ExhibitionPrimary exhibition={exhibition} config={config} />
      <ExhibitionSecondary exhibition={exhibition} config={config} />
      <KnowMore exhibition={exhibition} config={config} />
    </>
  );
}

export default Exhibition;
