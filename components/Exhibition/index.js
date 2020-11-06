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

const Exhibition = (props) => {
  return (
    <Container>
      <Top>
        <div>
          <h1>MAMBO Pop Up</h1>
        </div>
        <div></div>
        <div></div>
      </Top>
      <Bottom>
        <SubtitleContainer>
          <SubtitleBackground src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg" />
          <SubtitleContent>
            <SubtitleTextContainer>
              <h3>la historia del mambo</h3>
            </SubtitleTextContainer>
            <SubtitleAuthorContainer>
              <p>Oscar Monsalve</p>
              <p>Archivo del MAMBO</p>
            </SubtitleAuthorContainer>
          </SubtitleContent>
        </SubtitleContainer>
        <div></div>
        <div></div>
      </Bottom>
    </Container>
  );
};
export default Exhibition;
