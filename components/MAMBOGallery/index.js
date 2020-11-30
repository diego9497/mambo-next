import { useEffect, useState } from "react";
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
} from "./styles";

import Next from "../Icons/Next";
import Previous from "../Icons/Before";
import Accessibility from "../Icons/Accessibility";
import Tooltip from "../Tooltip";

import Image from "../Image";

export default function MAMBOGallery({
  gallery,
  index,
  fit = "cover",
  width = 500,
  height = 300,
  animation = false,
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
    setCurrent((state) => {
      if (state === gallery.length - 1) {
        return 0;
      } else {
        return state + 1;
      }
    });
  };

  const previousImage = () => {
    setCurrent((state) => {
      if (state === 0) {
        return gallery.length - 1;
      } else {
        return state - 1;
      }
    });
  };

  const handleCloseFromBackground = (e) => {
    let childElement = e.target.querySelector("div");
    if (childElement?.getAttribute("src")) {
      setOpen(false);
    }
  };

  return (
    <>
      <ImageToolTipContainer animation={animation}>
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
        <ClientPortal
          selector="#modal"
          close={closeModal}
          goLeft={previousImage}
          goRight={nextImage}
        >
          <Container>
            <LeftButton onClick={previousImage}>
              <Previous />
            </LeftButton>
            <RightButton onClick={nextImage}>
              <Next />
            </RightButton>
            <ImageSlider current={current}>
              {gallery.map((img) => (
                <ImageContainer onClick={handleCloseFromBackground}>
                  <ModalImage
                    src={
                      process.env.SPA
                        ? `/image/${img.src}`
                        : `/image/optimizado/${img.src}`
                    }
                  >
                    <img
                      src={
                        process.env.SPA
                          ? `/image/${img.src}`
                          : `/image/optimizado/${img.src}`
                      }
                    />
                    <Description>
                      <p dangerouslySetInnerHTML={{ __html: img.alt }}></p>
                      {img.caption && (
                        <p
                          dangerouslySetInnerHTML={{ __html: img.caption }}
                        ></p>
                      )}
                      {img.audio && (
                        <AudioContainer>
                          <Accessibility />
                        </AudioContainer>
                      )}
                    </Description>
                  </ModalImage>
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
