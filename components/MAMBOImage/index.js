//TODO Wikicommos y enlace en alts
//TODO Arte de la desobediencia no tiene audioguia
import { useState } from "react";
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
  GridAux,
  ImageAux,
} from "./styles";

import Image from "next/image";

export default function MAMBOImage({
  src,
  alt,
  fit = "cover",
  width = 500,
  height = 300,
  loading = "lazy",
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageContainer>
        <Image
          src={src}
          alt={alt}
          fit={fit}
          onClick={openModal}
          quality={90}
          width={width}
          height={height}
          layout="fixed"
          loading={loading}
        />
        <Tooltip>{alt}</Tooltip>
      </ImageContainer>
      {open && (
        <ClientPortal selector="#modal">
          <Container>
            <ContainerImage>
              <GridAux>
                <ImageAux>
                  <ModalImage src={src} />
                </ImageAux>
                <Description>
                  <p dangerouslySetInnerHTML={{ __html: alt }}></p>
                  <AudioContainer>
                    <Accessibility />
                  </AudioContainer>
                </Description>
              </GridAux>
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
