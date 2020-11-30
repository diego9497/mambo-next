import Link from "../Link";
import {
  Top,
  Bottom,
  Container,
  SubtitleAuthorContainer,
  SubtitleBgContainer,
  SubtitleContainerAnchor,
  SubtitleTextContainer,
  SubtitleContent,
} from "./styles";

import Image from "../Image";

const ExhibitionChoose = ({ exhibition, config }) => {
  const {
    title,
    text,
    history,
    forWhat,
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
            <SubtitleBgContainer>
              <Image
                src={img1.src}
                fit="fixed"
                loading="eager"
                width={600}
                height={400}
                quality={90}
              />
            </SubtitleBgContainer>
            <SubtitleContent className="content">
              <SubtitleTextContainer color={color} text={text}>
                <h3>{history}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span dangerouslySetInnerHTML={{ __html: img1.alt }}></span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
        <Link
          href={process.env.SPA ? `${id}/detail#content` : `${id}/detail`}
          hash="#content"
        >
          <SubtitleContainerAnchor>
            <SubtitleBgContainer>
              <Image
                src={img2.src}
                fit="fixed"
                loading="eager"
                width={600}
                height={400}
              />
            </SubtitleBgContainer>
            <SubtitleContent className="content">
              <SubtitleTextContainer color={color} text={text}>
                <h3>{forWhat}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span dangerouslySetInnerHTML={{ __html: img2.alt }}></span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
        <Link
          href={process.env.SPA ? `${id}/detail#more` : `${id}/detail`}
          hash="#more"
        >
          <SubtitleContainerAnchor>
            <SubtitleBgContainer>
              <Image
                src={img3.src}
                fit="fixed"
                loading="eager"
                width={600}
                height={400}
              />
            </SubtitleBgContainer>
            <SubtitleContent className="content">
              <SubtitleTextContainer color={color} text={text}>
                <h3>{config.more}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span dangerouslySetInnerHTML={{ __html: img3.alt }}></span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </SubtitleContainerAnchor>
        </Link>
      </Bottom>
    </Container>
  );
};
export default ExhibitionChoose;
