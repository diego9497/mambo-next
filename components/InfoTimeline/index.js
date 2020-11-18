import {
  ContainerInfo,
  HeaderInfo,
  ContainerIconHeader,
  TitleHeader,
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
} from "./styles";

import Next from "../Icons/Next";
import Before from "../Icons/Before";
import Timeline from "../Icons/TimeLine";
import Close from "../Icons/Close";

function InfoTimeline({ color, content, title, handleClose }) {
  return (
    <ContainerInfo color={color}>
      <ContainerTop color={color}>
        <HeaderInfo>
          <ContainerIconHeader color={color}>
            <Timeline />
          </ContainerIconHeader>
          <TitleHeader>{title}</TitleHeader>
          <button onClick={handleClose}>
            <Close />
          </button>
        </HeaderInfo>
        <ContainerImage color={color}>
          <ImageInfo />
        </ContainerImage>
        <ContainerContent>
          <TitleInformation>Objeto no encontrado</TitleInformation>
          <TitleContentInfo>Nuevos medios</TitleContentInfo>
          <SubtitleInfo>Ready-Made (1910)</SubtitleInfo>
          <TextContent>{content}</TextContent>
        </ContainerContent>
      </ContainerTop>
      <ContainerBottom color={color}>
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
