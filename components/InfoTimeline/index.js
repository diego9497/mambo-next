import {
  ContainerInfo,
  HeaderInfo,
  ContainerIconHeader,
  TitleHeader,
  ContainerIconClose,
  ContainerImage,
  ImageInfo,
  ContainerContent,
  TitleInformation,
  TitleContentInfo,
  SubtitleInfo,
  TextContent,
  ContainerButtons,
  ContainerIconBtn,
} from "./style";

function InfoTimeline(props) {
  return (
    <ContainerInfo color={props.color}>
      <HeaderInfo>
        <ContainerIconHeader></ContainerIconHeader>
        <TitleHeader>Ready-made</TitleHeader>
        <ContainerIconClose>X</ContainerIconClose>
      </HeaderInfo>
      <ContainerImage>
        <ImageInfo />
      </ContainerImage>
      <ContainerContent>
        <TitleInformation>Objeto no encontrado</TitleInformation>
        <TitleContentInfo>Nuevos medios</TitleContentInfo>
        <SubtitleInfo>Ready-Made (1910)</SubtitleInfo>
        <TextContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque
          exercitationem voluptas, unde porro! Doloremque provident eveniet,
          distinctio itaque recusandae quidem aliquam impedit!
        </TextContent>
      </ContainerContent>
      <ContainerButtons>
        <ContainerIconBtn></ContainerIconBtn>
        <ContainerIconBtn></ContainerIconBtn>
      </ContainerButtons>
    </ContainerInfo>
  );
}
export default InfoTimeline;
