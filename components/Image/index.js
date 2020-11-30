// import Img from "next/image";

import { ImageContainer, Picture } from "./styles";

export default function Image({
  width,
  height,
  fit = "cover",
  position = "center",
  loading = "lazy",
  src,
  alt,
  onClick,
}) {
  return (
    <Picture fit={fit} position={position}>
      <img onClick={onClick} src={`/image/optimizado/${src}`} alt={alt} />
    </Picture>
  );
}
