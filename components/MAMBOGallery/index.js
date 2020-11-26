import { useState } from "react";
import ClientPortal from "../ClientPortal";
import Close from "../Icons/Close";
import {
  Container,
  ModalImage,
  ImageSlider,
  CloseContainer,
  ImageContainer,
  LeftButton,
  RightButton,
  Description,
  AudioContainer,
  ImageToolTipContainer,
  GridAux,
  ImageAux,
} from "./styles";

import Next from "../Icons/Next";
import Previous from "../Icons/Before";
import Accessibility from "../Icons/Accessibility";
import Tooltip from "../Tooltip";

import Image from "next/image";

export default function MAMBOGallery({
  gallery,
  index,
  fit = "cover",
  width = 500,
  height = 300,
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(index);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const nextImage = () => {
    if (current === gallery.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const previousImage = () => {
    if (current === 0) {
      setCurrent(gallery.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <ImageToolTipContainer>
        <Image
          src={gallery[index].src}
          alt={gallery[index].alt}
          fit={fit}
          width={width}
          height={height}
          onClick={openModal}
        />
        <Tooltip>{gallery[index].alt}</Tooltip>
      </ImageToolTipContainer>
      {open && (
        <ClientPortal selector="#modal">
          <Container>
            <LeftButton onClick={previousImage}>
              <Previous />
            </LeftButton>
            <RightButton onClick={nextImage}>
              <Next />
            </RightButton>
            <ImageSlider current={current}>
              {gallery.map((img) => (
                <ImageContainer>
                  <GridAux>
                    <ImageAux>
                      <ModalImage src={img.src} />
                    </ImageAux>
                    <Description>
                      {img.alt}
                      <AudioContainer>
                        <Accessibility />
                      </AudioContainer>
                    </Description>
                  </GridAux>
                </ImageContainer>
              ))}
            </ImageSlider>
            <CloseContainer onClick={closeModal}>
              <Close />
            </CloseContainer>
          </Container>
        </ClientPortal>
      )}
    </>
  );
}
