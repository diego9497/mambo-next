//TODO Wikicommos y enlace en alts
//TODO Poner video en sección video nuevos medios
import { useRef, useState } from "react";
import ClientPortal from "../ClientPortal";
import Accessibility from "../Icons/Accessibility";
import Close from "../Icons/Close";
import Tooltip from "../Tooltip";
import {
  Container,
  ModalImage,
  CloseContainer,
  ContainerImage,
  Description,
  AudioContainer,
  ImageContainer,
} from "./styles";

import Image from "../Image";

export default function MAMBOImage({
  src,
  alt,
  audio,
  caption,
  fit = "cover",
  width = 500,
  height = 300,
  loading = "lazy",
}) {
  const [open, setOpen] = useState(false);
  const imageModal = useRef(null);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const closeModalFromBackground = (e) => {
    if (e.target === imageModal.current) {
      setOpen(false);
    }
  };

  return (
    <>
      <ImageContainer>
        <Image
          onClick={openModal}
          src={src}
          alt={alt}
          fit={fit}
          width={width}
          height={height}
          loading={loading}
        />
        <Tooltip>{alt}</Tooltip>
      </ImageContainer>
      {open && (
        <ClientPortal selector="#modal" close={closeModal}>
          <Container>
            <ContainerImage onClick={closeModalFromBackground} ref={imageModal}>
              <ModalImage
                src={
                  process.env.SPA ? `/image/${src}` : `/image/optimizado/${src}`
                }
              >
                <img
                  src={
                    process.env.SPA
                      ? `/image/${src}`
                      : `/image/optimizado/${src}`
                  }
                  alt={alt}
                />
                <Description>
                  <p dangerouslySetInnerHTML={{ __html: alt }}></p>
                  {caption && (
                    <p dangerouslySetInnerHTML={{ __html: caption }}></p>
                  )}
                  {audio && (
                    <AudioContainer>
                      <Accessibility />
                    </AudioContainer>
                  )}
                </Description>
              </ModalImage>
            </ContainerImage>
            <CloseContainer onClick={closeModal}>
              <Close />
            </CloseContainer>
          </Container>
        </ClientPortal>
      )}
    </>
  );
}
