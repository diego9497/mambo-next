import Link from "next/link";
import {
  Top,
  Bottom,
  Container,
  SubtitleAuthorContainer,
  SubtitleBackground,
  SubtitleContainer,
  SubtitleContainerAnchor,
  SubtitleTextContainer,
  SubtitleContent,
} from "./styles";

const Exhibition = ({ exhibition, config }) => {
  const { title, history, forWhat, author, color, id } = exhibition;

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
        <Link href={`${id}/detail#content1`}>
          <SubtitleContainerAnchor>
            <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
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
        <Link href={`${id}/detail#content2`}>
          <SubtitleContainerAnchor>
            <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
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
            <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
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
export default Exhibition;
