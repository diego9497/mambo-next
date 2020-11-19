import {
  Container,
  ContainerSection,
  Title,
  ContainerInfo,
  ImageBackground,
  Text,
  ContentInfo,
} from "./styles";

function KnowMore(props) {
  let color = "#335FD7";
  return (
    <Container>
      <ContainerSection>
        <Title color={color}>Conoce más</Title>
      </ContainerSection>
      <ContainerSection color={color}>
        <ContentInfo>IG @mambogota</ContentInfo>
        <ContentInfo>FB @fanmambogota</ContentInfo>
        <ContentInfo>TW @_mambogota</ContentInfo>
        <ContentInfo>YT Museo de Arte Moderno de Bogotá</ContentInfo>
      </ContainerSection>
      <ContainerSection>
        <ImageBackground src="/image/3.jpg" />
        <ContainerInfo color={color}>
          <Text>Oscar Monsalve</Text>
          <Text>Fuente archivo MAMBO</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection>
        <ImageBackground src="/image/3.jpg" />
        <ContainerInfo color={color}>
          <Text>Oscar Monsalve</Text>
          <Text>Fuente archivo MAMBO</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection>
        <ImageBackground src="/image/3.jpg" />
        <ContainerInfo color={color}>
          <Text>Oscar Monsalve</Text>
          <Text>Fuente archivo MAMBO</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection>
        <ImageBackground src="/image/3.jpg" />
        <ContainerInfo color={color}>
          <Text>Oscar Monsalve</Text>
          <Text>Fuente archivo MAMBO</Text>
        </ContainerInfo>
      </ContainerSection>
    </Container>
  );
}

export default KnowMore;
