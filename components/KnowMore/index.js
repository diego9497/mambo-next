import {
  Container,
  ContainerSection,
  Title,
  ContainerInfo,
  ImageBackground,
  Text,
  ContentInfo,
} from "./styles";

function KnowMore({ exhibition, config }) {
  const { color } = exhibition;
  return (
    <Container>
      <ContainerSection>
        <Title color={color}>{config.more}</Title>
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
