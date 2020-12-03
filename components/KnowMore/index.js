import {
  Container,
  ContainerSection,
  Title,
  ContainerInfo,
  Text,
  Subtitle,
  ReferenceContainer,
  ReferencesHeader,
  CloseButton,
  ReferenceContent,
  ImageBgContainer,
  SeeLink,
  SeeMore,
} from "./styles";

import Image from "../Image";

import Close from "../Icons/Close";
import { useState } from "react";

function KnowMore({ exhibition, config }) {
  const { color, text, knowMore, img1, img2, img3, keyConcepts } = exhibition;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="more">
      <ContainerSection>
        <Title color={color}>{config.more}</Title>
      </ContainerSection>
      <ContainerSection onClick={handleOpen} color={color} text={text} main>
        <Subtitle>{config.references}</Subtitle>
        <SeeMore>{config.seeMore}</SeeMore>
      </ContainerSection>
      <ContainerSection
        href={knowMore[3]?.link}
        text={text}
        target="blank"
        color={color}
      >
        <ImageBgContainer>
          <Image
            src={keyConcepts[0].img.src}
            alt={keyConcepts[0].img.alt}
            position={exhibition.id === 8 ? "bottom" : "center"}
            width={600}
            height={350}
          />
        </ImageBgContainer>
        <ContainerInfo color={color} text={text}>
          <Text>{knowMore[3]?.title}</Text>
          <SeeLink color={color}>{config.seeLink}</SeeLink>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[0].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img1.src} alt={img1.alt} width={600} height={350} />
        </ImageBgContainer>
        <ContainerInfo color={color} text={text}>
          <Text>{knowMore[0].title}</Text>
          <SeeLink color={color}>{config.seeLink}</SeeLink>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[1].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img2.src} alt={img2.alt} width={600} height={350} />
        </ImageBgContainer>
        <ContainerInfo color={color} text={text}>
          <Text>{knowMore[1].title}</Text>
          <SeeLink color={color}>{config.seeLink}</SeeLink>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[2].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img3.src} alt={img3.alt} width={600} height={350} />
        </ImageBgContainer>
        <ContainerInfo color={color} text={text}>
          <Text>{knowMore[2].title}</Text>
          <SeeLink color={color}>{config.seeLink}</SeeLink>
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
          <ReferenceContent text={text}>
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
