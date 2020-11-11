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
  const { title, history, author, color, id } = exhibition;

  function ChooseLink({ children }) {
    switch (process.env.NODE_ENV) {
      case "development":
        return (
          <Link href={`${id}/detail`}>
            <SubtitleContainerAnchor>{children}</SubtitleContainerAnchor>
          </Link>
        );
      case "production":
        // return (
        //   <SubtitleContainer>
        //     <a href={`./${id}/detail.html`}>{children}</a>
        //   </SubtitleContainer>
        // );
        return (
          <Link href={`${id}/detail`}>
            <SubtitleContainerAnchor>{children}</SubtitleContainerAnchor>
          </Link>
        );
    }
  }

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
        <ChooseLink>
          <>
            <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
            <SubtitleContent>
              <SubtitleTextContainer color={color}>
                <h3>{history}</h3>
              </SubtitleTextContainer>
              <SubtitleAuthorContainer>
                <span>{author}</span>
                <span>Archivo del MAMBO</span>
              </SubtitleAuthorContainer>
            </SubtitleContent>
          </>
        </ChooseLink>
        <SubtitleContainer>
          <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
        </SubtitleContainer>
        <SubtitleContainer>
          <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
        </SubtitleContainer>
      </Bottom>
    </Container>
  );
};
export default Exhibition;
