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
  AudioContainerHistory,
  ContentSecond,
  FirstEmpty,
  SecondEmpty,
} from "../ExhibitionPrimary/styles";

import { GalleryContainer } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Gallery from "../Gallery";
import MAMBOImage from "../MAMBOImage";

export default function ExhibitionSpecial({ exhibition, config }) {
  const { color, content, withPrimary, description, title } = exhibition;
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
              <AudioContainerHistory>
                <Accessibility />
              </AudioContainerHistory>
              {description}
            </TextContentHistory>
          </ContentHistory>
          <ContentSecond background={color}></ContentSecond>
          <FirstEmpty />
          <SecondEmpty />
        </GridHistory>
      )}
      {content.map(({ title, description, gallery }, i) => (
        <ContainerDetail special invert={i % 2 !== 0}>
          <ContainerTitle>
            <Title color={color}>
              <AudioContainer>
                <Accessibility />
              </AudioContainer>
              {title}
            </Title>
          </ContainerTitle>
          <ContainerContent>
            <TextContent>{description}</TextContent>
          </ContainerContent>
          <GalleryContainer invert={i % 2 !== 0}>
            <Gallery gallery={gallery} />
          </GalleryContainer>
        </ContainerDetail>
      ))}
    </>
  );
}
