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
            <ImageBgContainer>
              <Image
                src={keyConcepts[0].img.src}
                alt={keyConcepts[0].img.alt}
                width={600}
                height={350}
              />
            </ImageBgContainer>
            <ContainerInfo color={color}>
              <Text>{knowMore[3].title}</Text>
            </ContainerInfo>
          </>
        ) : (
          <ImageBgContainer>
            <Image
              src={keyConcepts[0].img.src}
              alt={keyConcepts[0].img.alt}
              width={600}
              height={350}
            />
          </ImageBgContainer>
        )}
      </ContainerSection>
      <ContainerSection href={knowMore[0].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img1.src} alt={img1.alt} width={600} height={350} />
        </ImageBgContainer>
        <ContainerInfo color={color}>
          <Text>{knowMore[0].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[1].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img2.src} alt={img2.alt} width={600} height={350} />
        </ImageBgContainer>
        <ContainerInfo color={color}>
          <Text>{knowMore[1].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[2].link} text={text} target="blank">
        <ImageBgContainer>
          <Image src={img3.src} alt={img3.alt} width={600} height={350} />
        </ImageBgContainer>
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
