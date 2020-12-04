import {
  ContainerDetail,
  ContainerTitle,
  Title,
  AudioContainer,
  ContainerContent,
  TextContent,
} from "../ExhibitionSecondary/styles";

import {
  GridHistory,
  ContainerTitle as PContainerTitle,
  Title as PTitle,
  ContainerImagePrincipal,
  ContentHistory,
  TextContentHistory,
  TextContentSecond,
  ContentSecond,
  FirstEmpty,
  SecondEmpty,
} from "../ExhibitionPrimary/styles";

import {
  Container as ContainerKnowMore,
  ContainerSection,
  Title as KTitle,
  Subtitle,
  SeeMore,
  SeeLink,
  ImageBgContainer,
  ContainerInfo,
  ReferenceContainer,
  ReferencesHeader,
  CloseButton,
  ReferenceContent,
  Text,
} from "../KnowMore/styles";

import { GalleryContainer } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Close from "../Icons/Close";
import Gallery from "../Gallery";
import MAMBOImage from "../MAMBOImage";
import Image from "../Image";
import { useState } from "react";

export default function ExhibitionSpecial({ exhibition, config }) {
  const {
    color,
    content,
    text,
    guide,
    here,
    withPrimary,
    description,
    knowMore,
    title,
    references,
  } = exhibition;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(content[0]);
  return (
    <>
      {withPrimary && (
        <GridHistory>
          <PContainerTitle>
            <PTitle color={color}>{title}</PTitle>
          </PContainerTitle>
          <ContainerImagePrincipal>
            <MAMBOImage
              src={content[0].gallery[4].src}
              alt={content[0].gallery[4].alt}
            />
          </ContainerImagePrincipal>
          <ContentHistory>
            <TextContentHistory>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </TextContentHistory>
          </ContentHistory>
          <ContentSecond background={color}>
            <TextContentSecond color={text}>
              {guide}
              <a href="/MV-Guia2020-arte.pdf" target="_blank">
                {here}
              </a>
            </TextContentSecond>
          </ContentSecond>
          <FirstEmpty />
          <SecondEmpty />
        </GridHistory>
      )}
      {content.map(
        ({ title, description, gallery, sectionAudio, video }, i) => (
          <ContainerDetail special invert={i % 2 !== 0}>
            <ContainerTitle>
              <Title color={color}>
                {sectionAudio && (
                  <AudioContainer>
                    <Accessibility />
                  </AudioContainer>
                )}
                {title}
              </Title>
            </ContainerTitle>
            <ContainerContent>
              <TextContent>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </TextContent>
            </ContainerContent>
            <GalleryContainer invert={i % 2 !== 0}>
              {video ? (
                <video
                  src={`/image/optimizado/${video.src}`}
                  width="100%"
                  controls
                ></video>
              ) : (
                <Gallery gallery={gallery} />
              )}
            </GalleryContainer>
          </ContainerDetail>
        )
      )}
      {references && (
        <ContainerKnowMore>
          <ContainerSection>
            <KTitle color={color}>{config.more}</KTitle>
          </ContainerSection>
          <ContainerSection onClick={handleOpen} color={color} text={text} main>
            <Subtitle>{config.references}</Subtitle>
            <SeeMore>{config.seeMore}</SeeMore>
          </ContainerSection>
          <ContainerSection text={text} href={knowMore[0].url} target="_blank">
            <ImageBgContainer>
              <Image
                src={content[0].gallery[0].src}
                alt={content[0].gallery[0].alt}
              />
            </ImageBgContainer>
            <ContainerInfo color={color}>
              <Text>{knowMore[0].title}</Text>
              <SeeLink color={color}>{config.seeLink}</SeeLink>
            </ContainerInfo>
          </ContainerSection>
          <ContainerSection text={text} href={knowMore[1].url} target="_blank">
            <ImageBgContainer>
              <Image
                src={content[1].gallery[0].src}
                alt={content[1].gallery[0].alt}
              />
            </ImageBgContainer>
            <ContainerInfo color={color}>
              <Text>{knowMore[1].title}</Text>
              <SeeLink color={color}>{config.seeLink}</SeeLink>
            </ContainerInfo>
          </ContainerSection>
          <ContainerSection text={text} href={knowMore[2].url} target="_blank">
            <ImageBgContainer>
              <Image
                src={content[2].gallery[0].src}
                alt={content[2].gallery[0].alt}
              />
            </ImageBgContainer>
            <ContainerInfo color={color}>
              <Text>{knowMore[2].title}</Text>
              <SeeLink color={color}>{config.seeLink}</SeeLink>
            </ContainerInfo>
          </ContainerSection>
          <ContainerSection text={text} href={knowMore[3].url} target="_blank">
            <ImageBgContainer>
              <Image
                src={content[4].gallery[0].src}
                alt={content[4].gallery[0].alt}
              />
            </ImageBgContainer>
            <ContainerInfo color={color}>
              <Text>{knowMore[3].title}</Text>
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
        </ContainerKnowMore>
      )}
    </>
  );
}
