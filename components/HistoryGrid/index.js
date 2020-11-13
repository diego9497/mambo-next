import {
  GridHistory,
  ContainerTitle,
  Title,
  ContainerImagePrincipal,
  ImagePrincipal,
  ContentHistory,
  TitleContentSecond,
  TextContentHistory,
  ContentSecond,
  TextContentSecond,
  FirstEmpty,
  SecondEmpty,
  ContainerFirstImage,
  ContainerSecondImage,
  ContainerThirdImage,
  ImageSecond,
  ContentControls,
  Gallery,
  GalleryImageContainer,
  GalleryContainer,
} from "./styles";
import DetailHistory from "../DetailHistory";
import Next from "../Icons/Next";
import Before from "../Icons/Before";
import { useState } from "react";
import { MAMBOImage } from "../MAMBOImage";

function HistoryGrid({ exhibition, config }) {
  const {
    history,
    historyDescription,
    color,
    author,
    authorContent,
    forWhat,
    forWhatContent,
  } = exhibition;

  const [index, setIndex] = useState(0);

  const nextText = () => {
    if (index < historyDescription.length - 1) {
      setIndex(index + 1);
    }
  };
  const previousText = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <GridHistory>
        <ContainerTitle>
          <Title color={color}>{history}</Title>
        </ContainerTitle>
        <ContainerImagePrincipal>
          <MAMBOImage src="/image/mambo-diagonal.jpg" />
        </ContainerImagePrincipal>
        <ContentHistory>
          <TextContentHistory>{historyDescription[index]}</TextContentHistory>
          <ContentControls>
            <div>
              {index !== 0 && (
                <div onClick={previousText}>
                  <Before />
                </div>
              )}
            </div>
            <div>
              {index !== historyDescription.length - 1 && (
                <div onClick={nextText}>
                  <Next />
                </div>
              )}
            </div>
          </ContentControls>
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
          <GalleryImageContainer>
            <img
              src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
              alt=""
            />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <img
              src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
              alt=""
            />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <img
              src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
              alt=""
            />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <img
              src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
              alt=""
            />
          </GalleryImageContainer>
        </Gallery>
      </GalleryContainer>
      <DetailHistory exhibition={exhibition} config={config} />
    </>
  );
}

export default HistoryGrid;
