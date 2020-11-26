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
  handleNext,
  handlePrev,
  last,
  first,
  text,
  url,
}) {
  return (
    <ContainerInfo>
      <ContainerTop color={color}>
        <HeaderInfo text={text} color={color}>
          <ContainerIconHeader text={text} color={color}>
            {iconHeader}
          </ContainerIconHeader>
          <TitleHeader text={text}>{title}</TitleHeader>
          <button onClick={handleClose}>
            <Close />
          </button>
        </HeaderInfo>
        <ContainerImage color={color}></ContainerImage>
        <ContainerContent text={text}>
          <SubtitleInfo>{subtitle}</SubtitleInfo>
          <TextContent>{content}</TextContent>
          {url && (
            <a href={url} target="blank">
              {url}
            </a>
          )}
        </ContainerContent>
      </ContainerTop>
      <ContainerBottom color={color}>
        {controls && (
          <ContainerButtons text={text} color={color}>
            <div>
              {!first && (
                <button onClick={handlePrev}>
                  <Before />
                </button>
              )}
            </div>
            <div>
              {!last && (
                <button onClick={handleNext}>
                  <Next />
                </button>
              )}
            </div>
          </ContainerButtons>
        )}
      </ContainerBottom>
    </ContainerInfo>
  );
}
