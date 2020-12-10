import { Container, GallerySlide, SlideContainer } from "./styles";
import MAMBOGallery from "../MAMBOGallery";
import { useEffect, useState } from "react";

export default function Gallery({ gallery }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((state) => {
      if (state === gallery.length - 1) {
        return 0;
      } else {
        return state + 1;
      }
    });
  };
  const handlePrevious = () => {
    setCurrent((state) => {
      if (state === 0) {
        return gallery.length - 1;
      } else {
        return state - 1;
      }
    });
  };

  useEffect(() => {
    let id = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Container>
      <GallerySlide current={current}>
        {gallery.map((img, index) => (
          <SlideContainer key={index}>
            <MAMBOGallery gallery={gallery} index={index} />
          </SlideContainer>
        ))}
      </GallerySlide>
    </Container>
  );
}
