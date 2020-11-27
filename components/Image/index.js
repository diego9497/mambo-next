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
    // <ImageContainer fit={fit} position={position}>
    //   <Img
    //     onClick={onClick}
    //     src={`/image/${src}`}
    //     alt={alt}
    //     quality={90}
    //     width={width}
    //     height={height}
    //     layout="fixed"
    //     // loading={loading}
    //     loading="eager"
    //   />
    // </ImageContainer>
    <Picture fit={fit} position={position}>
      <img onClick={onClick} src={`/image/optimizado/${src}`} alt={alt} />
    </Picture>
  );
}
