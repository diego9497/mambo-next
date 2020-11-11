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
      <ContainerTop>
        <HeaderInfo>
          <ContainerIconHeader>
            <Timeline />
          </ContainerIconHeader>
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
            exercitationem voluptas, unde porro! Doloremque provident eveniet.
          </TextContent>
        </ContainerContent>
      </ContainerTop>
      <ContainerBottom>
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
