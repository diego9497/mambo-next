import {
  ContainerDetail,
  ContainerTitle,
  Title,
  AudioContainer,
  ContainerContent,
  TextContent,
  ContainerContentSecond,
} from "../ExhibitionSecondary/styles";
import { GalleryContainer } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Gallery from "../Gallery";

export default function ExhibitionSpecial({ exhibition, config }) {
  const { color, content } = exhibition;
  return (
    <>
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
