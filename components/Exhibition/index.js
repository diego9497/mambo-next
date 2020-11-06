import {
  Top,
  Bottom,
  Container,
  SubtitleAuthorContainer,
  SubtitleBackground,
  SubtitleContainer,
  SubtitleTextContainer,
  SubtitleContent,
} from "./styles";

const Exhibition = ({ title, history, author, color }) => {
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
        <SubtitleContainer>
          <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
          <SubtitleContent>
            <SubtitleTextContainer color={color}>
              <h3>{history}</h3>
            </SubtitleTextContainer>
            <SubtitleAuthorContainer>
              <p>{author}</p>
              <p>Archivo del MAMBO</p>
            </SubtitleAuthorContainer>
          </SubtitleContent>
        </SubtitleContainer>
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
