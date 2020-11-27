import Img from "next/image";
import { ImageContainer } from "./styles";

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
    <ImageContainer fit={fit} position={position}>
      <Img
        onClick={onClick}
        src={src}
        alt={alt}
        quality={90}
        width={width}
        height={height}
        layout="fixed"
        loading={loading}
      />
    </ImageContainer>
  );
}
