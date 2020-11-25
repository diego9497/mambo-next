import { useState } from "react";
import ClientPortal from "../ClientPortal";
import Accessibility from "../Icons/Accessibility";
import Close from "../Icons/Close";
import Tooltip from "../Tooltip";
import {
  Image,
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

export default function MAMBOImage({ src, alt, fit = "cover" }) {
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
        <Image src={src} alt={alt} fit={fit} onClick={openModal} />
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
                  {alt}
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
