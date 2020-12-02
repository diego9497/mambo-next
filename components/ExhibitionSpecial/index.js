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

import { GalleryContainer } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Gallery from "../Gallery";
import MAMBOImage from "../MAMBOImage";

export default function ExhibitionSpecial({ exhibition, config }) {
  const {
    color,
    content,
    text,
    guide,
    here,
    withPrimary,
    description,
    title,
  } = exhibition;
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
    </>
  );
}
