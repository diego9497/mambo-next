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
import Close from "../Icons/Close";

export default function CardPlaceMilestone({
  color,
  title,
  subtitle,
  content,
  handleClose,
  iconHeader,
  controls,
}) {
  return (
    <ContainerInfo>
      <ContainerTop color={color}>
        <HeaderInfo color={color}>
          <ContainerIconHeader color={color}>{iconHeader}</ContainerIconHeader>
          <TitleHeader>{title}</TitleHeader>
          <button onClick={handleClose}>
            <Close />
          </button>
        </HeaderInfo>
        <ContainerImage color={color}></ContainerImage>
        <ContainerContent>
          <SubtitleInfo>{subtitle}</SubtitleInfo>
          <TextContent>{content}</TextContent>
        </ContainerContent>
      </ContainerTop>
      <ContainerBottom color={color}>
        {controls && (
          <ContainerButtons>
            <ContainerIconBtn color={color}>
              <Before />
            </ContainerIconBtn>
            <ContainerIconBtn color={color}>
              <Next />
            </ContainerIconBtn>
          </ContainerButtons>
        )}
      </ContainerBottom>
    </ContainerInfo>
  );
}
