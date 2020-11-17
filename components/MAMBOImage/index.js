import { useState } from "react";
import ClientPortal from "../ClientPortal";
import Close from "../Icons/Close";
import { Image, Container, ModalImage, CloseContainer } from "./style";

export default function MAMBOImage({ src, alt, description, fit = "cover" }) {
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
            <ModalImage src={src} />
            <CloseContainer onClick={closeModal}>
              <Close />
            </CloseContainer>
          </Container>
        </ClientPortal>
      )}
    </>
  );
}
