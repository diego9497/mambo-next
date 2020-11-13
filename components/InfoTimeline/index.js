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
  ContainerBottom,
  ContainerTop,
} from "./style";

import Next from "../Icons/Next";
import Before from "../Icons/Before";
import Timeline from "../Icons/TimeLine";

function InfoTimeline(props) {
  return (
    <ContainerInfo color={props.color}>
      <ContainerTop color={props.color}>
        <HeaderInfo>
          <ContainerIconHeader color={props.color}>
            <Timeline />
          </ContainerIconHeader>
          <TitleHeader>{props.title}</TitleHeader>
          <ContainerIconClose>X</ContainerIconClose>
        </HeaderInfo>
        <ContainerImage>
          <ImageInfo />
        </ContainerImage>
        <ContainerContent>
          <TitleInformation>Objeto no encontrado</TitleInformation>
          <TitleContentInfo>Nuevos medios</TitleContentInfo>
          <SubtitleInfo>Ready-Made (1910)</SubtitleInfo>
          <TextContent>{props.content}</TextContent>
        </ContainerContent>
      </ContainerTop>
      <ContainerBottom color={props.color}>
        <ContainerButtons>
          <ContainerIconBtn>
            <Before />
          </ContainerIconBtn>
          <ContainerIconBtn>
            <Next />
          </ContainerIconBtn>
        </ContainerButtons>
      </ContainerBottom>
    </ContainerInfo>
  );
}
export default InfoTimeline;
