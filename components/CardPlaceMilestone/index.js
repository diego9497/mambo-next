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
import MAMBOImage from "../MAMBOImage";
import { useRouter } from "next/router";

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
  image,
}) {
  const router = useRouter();
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
        <ContainerImage color={color}>
          {image && <MAMBOImage {...image} />}
        </ContainerImage>
        <ContainerContent text={text}>
          <SubtitleInfo>{subtitle}</SubtitleInfo>
          <TextContent>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </TextContent>
          {url && !image && (
            <a href={url} target="blank">
              {router.asPath.includes("/en") ? "See link" : "Ver link"}
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
