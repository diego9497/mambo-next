import { useState } from "react";
import ClientPortal from "../ClientPortal";
import Close from "../Icons/Close";
import {
  Image,
  Container,
  ModalImage,
  ImageSlider,
  CloseContainer,
  ImageContainer,
  LeftButton,
  RightButton,
} from "./style";

import Next from "../Icons/Next";
import Previous from "../Icons/Before";

export default function MAMBOGallery({ gallery, index, fit = "cover" }) {
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
      <Image
        src={gallery[index].src}
        alt={gallery[index].alt}
        fit={fit}
        onClick={openModal}
      />
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
                  <ModalImage src={img.src} />
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
