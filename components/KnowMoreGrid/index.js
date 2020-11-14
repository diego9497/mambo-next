import {
  Container,
  ContainerGrid,
  ContainerTitle,
  Title,
  ContainerContent,
  ContentText,
  ContainerEmpty,
  Image,
  ContainerAuthor,
  ContainerEmptyTw,
  ContainerEmptyTr,
  ContainerContentAuthor,
} from "./style";

function KnowMoreGrid(props) {
  return (
    <Container>
      <ContainerGrid>
        <ContainerTitle>
          <Title>Conoce más</Title>
        </ContainerTitle>
        <ContainerContent>
          <ContentText>IG @mambobogota</ContentText>
          <ContentText>FB @fanmambogota</ContentText>
          <ContentText>TW @_mambogota</ContentText>
          <ContentText>YT Museo de Arte Moderno de Bogotá</ContentText>
        </ContainerContent>
        <ContainerEmpty>
          <Image src="https://monumentosdemalaga.files.wordpress.com/2012/03/f1.jpg" />
        </ContainerEmpty>
        <ContainerAuthor>
          <Image src="https://monumentosdemalaga.files.wordpress.com/2012/03/f1.jpg" />
          <ContainerContentAuthor>
            <ContentText>Oscar Monsalve</ContentText>
            <ContentText>Fuente archivo MAMBO</ContentText>
          </ContainerContentAuthor>
        </ContainerAuthor>
        <ContainerEmptyTw>
          <Image src="https://monumentosdemalaga.files.wordpress.com/2012/03/f1.jpg" />
        </ContainerEmptyTw>
        <ContainerEmptyTr>
          <Image src="https://monumentosdemalaga.files.wordpress.com/2012/03/f1.jpg" />
        </ContainerEmptyTr>
      </ContainerGrid>
    </Container>
  );
}

export default KnowMoreGrid;
