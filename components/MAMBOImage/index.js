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
  position = "center",
}) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
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

  const removeHover = () => {
    if (window.innerWidth < 576) {
      setHover(!hover);
    }
  };

  const onMouseOver = () => {
    if (window.innerWidth > 576) {
      setHover(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth > 576) {
      setHover(false);
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
          position={position}
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
                hover={hover}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                onClick={removeHover}
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
