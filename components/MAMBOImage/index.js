import { useState } from "react";
import ClientPortal from "../ClientPortal";
import Close from "../Icons/Close";
import {
  Image,
  Container,
  ModalImage,
  CloseContainer,
  ContainerImage,
  Description,
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
      <Image src={src} alt={alt} fit={fit} onClick={openModal} />
      {open && (
        <ClientPortal selector="#modal">
          <Container>
            <ContainerImage>
              <ModalImage src={src} />
              <Description>{alt}</Description>
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
