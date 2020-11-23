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
  const { color, text, knowMore, img3 } = exhibition;
  return (
    <Container>
      <ContainerSection>
        <Title color={color}>{config.more}</Title>
      </ContainerSection>
      <ContainerSection color={color} text={text}>
        <ContentInfo>Referencias</ContentInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[3]?.link} text={text} target="blank">
        {knowMore[3] ? (
          <>
            <ImageBackground
              src={knowMore[3].img.src}
              alt={knowMore[3].img.alt}
            />
            <ContainerInfo color={color}>
              <Text>{knowMore[3].title}</Text>
            </ContainerInfo>
          </>
        ) : (
          <ImageBackground src={img3.src} alt={img3.alt} />
        )}
      </ContainerSection>
      <ContainerSection href={knowMore[0].link} text={text} target="blank">
        <ImageBackground src={knowMore[0].img.src} alt={knowMore[0].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[0].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[1].link} text={text} target="blank">
        <ImageBackground src={knowMore[1].img.src} alt={knowMore[1].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[1].title}</Text>
        </ContainerInfo>
      </ContainerSection>
      <ContainerSection href={knowMore[2].link} text={text} target="blank">
        <ImageBackground src={knowMore[2].img.src} alt={knowMore[2].img.alt} />
        <ContainerInfo color={color}>
          <Text>{knowMore[2].title}</Text>
        </ContainerInfo>
      </ContainerSection>
    </Container>
  );
}

export default KnowMore;
