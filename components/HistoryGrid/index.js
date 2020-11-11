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
} from "./styles";
import DetailHistory from "../DetailHistory";
import Next from "../Icons/Next";

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
  return (
    <>
      <GridHistory>
        <ContainerTitle>
          <Title color={color}>{history}</Title>
        </ContainerTitle>
        <ContainerImagePrincipal>
          <ImagePrincipal
            src={
              "https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
            }
          />
        </ContainerImagePrincipal>
        <ContentHistory>
          <TextContentHistory>{historyDescription[0]}</TextContentHistory>
          <Next />
        </ContentHistory>
        <ContentSecond background={color}>
          <TitleContentSecond color="white">{author}</TitleContentSecond>
          <TextContentSecond color="white">{authorContent}</TextContentSecond>
        </ContentSecond>
        <FirstEmpty />
        <SecondEmpty />
        <ContainerFirstImage>
          <ImageSecond
            src={
              "https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
            }
          />
        </ContainerFirstImage>
        <ContainerSecondImage>
          <ImageSecond
            src={
              "https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
            }
          />
        </ContainerSecondImage>
        <ContainerThirdImage>
          <ImageSecond
            src={
              "https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
            }
          />
        </ContainerThirdImage>
      </GridHistory>
      <DetailHistory exhibition={exhibition} config={config} />
    </>
  );
}

export default HistoryGrid;
