import {
  Container,
  ContainerSection,
  Title,
  ContainerInfo,
  ImageBackground,
  Text,
  Subtitle,
  ReferenceContainer,
  ReferencesHeader,
  CloseButton,
  ReferenceContent,
} from "./styles";

import Close from "../Icons/Close";
import { useState } from "react";

function KnowMore({ exhibition, config }) {
  const { color, text, knowMore, img3 } = exhibition;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ContainerSection>
        <Title color={color}>{config.more}</Title>
      </ContainerSection>
      <ContainerSection onClick={handleOpen} color={color} text={text}>
        <Subtitle>{config.references}</Subtitle>
      </ContainerSection>
      <ContainerSection href={knowMore[3]?.link} text={text} target="blank">
        {knowMore[3] ? (
          <>
            <ImageBackground
              src={knowMore[3].img.src}
              alt={knowMore[3].img.alt}
            />
            <ContainerInfo color={color}>
              <Text>{knowMore[3].title}</Text>
            </ContainerInfo>
          </>
        ) : (
          <ImageBackground src={img3.src} alt={img3.alt} />
        )}
      </ContainerSection>
      <ContainerSection href={knowMore[0].link} text={text} target="blank">
        <ImageBackground src={knowMore[0].img.src} alt={knowMore[0].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[0].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[1].link} text={text} target="blank">
        <ImageBackground src={knowMore[1].img.src} alt={knowMore[1].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[1].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[2].link} text={text} target="blank">
        <ImageBackground src={knowMore[2].img.src} alt={knowMore[2].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[2].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      {open && (
        <ReferenceContainer color={color} text={text}>
          <ReferencesHeader>
            <h3>{config.references}</h3>
            <CloseButton onClick={handleClose}>
              <Close />
            </CloseButton>
          </ReferencesHeader>
          <ReferenceContent>
            <p>
              {exhibition?.references?.map((reference) => (
                <>
                  <span>{reference}</span>
                  <br />
                  <br />
                </>
              ))}
            </p>
          </ReferenceContent>
        </ReferenceContainer>
      )}
    </Container>
  );
}

export default KnowMore;
