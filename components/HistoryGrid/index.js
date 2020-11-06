import {
  GridHistory,
  ContainerTitle,
  Title,
  ContainerImagePrincipal,
  ImagePrincipal,
  ContentHistory,
  TitleContentSecond,
  TextContentHistory,
  ContainerButtom,
  ContentSecond,
  TextContentSecond,
  FirstEmpty,
  SecondEmpty,
  ContainerFirstImage,
  ContainerSecondImage,
  ContainerThirdImage,
  ImageSecond,
} from "./styles";

function HistoryGrid({
  history,
  historyDescription,
  color,
  author,
  authorContent,
}) {
  return (
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
        <ContainerButtom />
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
  );
}

export default HistoryGrid;
