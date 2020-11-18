import {
  GridHistory,
  ContainerTitle,
  Title,
  ContainerImagePrincipal,
  ContentHistory,
  TitleContentSecond,
  TextContentHistory,
  ContentSecond,
  TextContentSecond,
  FirstEmpty,
  SecondEmpty,
  Gallery,
  GalleryImageContainer,
  GalleryContainer,
} from "./styles";

import MAMBOImage from "../MAMBOImage";
import MAMBOGallery from "../MAMBOGallery";

export default function ExhibitionPrimary({ exhibition, config }) {
  const {
    history,
    historyDescription,
    color,
    author,
    authorContent,
    img1,
    gallery,
  } = exhibition;
  return (
    <>
      <GridHistory>
        <ContainerTitle>
          <Title color={color}>{history}</Title>
        </ContainerTitle>
        <ContainerImagePrincipal>
          <MAMBOImage src={img1.src} alt={img1.alt} />
        </ContainerImagePrincipal>
        <ContentHistory>
          <TextContentHistory>{historyDescription}</TextContentHistory>
        </ContentHistory>
        <ContentSecond background={color}>
          <TitleContentSecond color="white">{author}</TitleContentSecond>
          <TextContentSecond color="white">{authorContent}</TextContentSecond>
        </ContentSecond>
        <FirstEmpty />
        <SecondEmpty />
      </GridHistory>
      <GalleryContainer>
        <Gallery>
          {gallery?.map((img, index) => (
            <GalleryImageContainer>
              <MAMBOGallery gallery={gallery} index={index} />
            </GalleryImageContainer>
          ))}
        </Gallery>
      </GalleryContainer>
    </>
  );
}
