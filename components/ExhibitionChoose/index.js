import Link from "next/link";
import {
  Top,
  Bottom,
  Container,
  SubtitleAuthorContainer,
  SubtitleBackground,
  SubtitleContainerAnchor,
  SubtitleTextContainer,
  SubtitleContent,
} from "./styles";

const ExhibitionChoose = ({ exhibition, config }) => {
  const {
    title,
    history,
    forWhat,
    author,
    color,
    id,
    img1,
    img2,
    img3,
  } = exhibition;

  return (
    <Container>
      <Top color={color}>
        <div>
          <h1>{title}</h1>
        </div>
        <div></div>
        <div></div>
      </Top>
      <Bottom>
        <Link href={`${id}/detail`}>
          <SubtitleContainerAnchor>
            <SubtitleBackground src={img1.src} />
            <SubtitleContent>
              <SubtitleTextContainer color={color}>
                <h3>{history}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span>{author}</span>
                <span>{config.archive}</span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
        <Link href={`${id}/detail?content2=true`}>
          <SubtitleContainerAnchor>
            <SubtitleBackground src={img2.src} />
            <SubtitleContent>
              <SubtitleTextContainer color={color}>
                <h3>{forWhat}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span>{author}</span>
                <span>{config.archive}</span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
        <Link href={`${id}/more`}>
          <SubtitleContainerAnchor>
            <SubtitleBackground src={img3.src} />
            <SubtitleContent>
              <SubtitleTextContainer color={color}>
                <h3>{config.more}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span>{author}</span>
                <span>{config.archive}</span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
      </Bottom>
    </Container>
  );
};
export default ExhibitionChoose;
