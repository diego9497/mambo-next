import { Container, Background, Content, Text } from "./styles";

const MasonryCard = ({ img, title, filter, color, always }) => {
  return (
    <Container>
      <Background src={img} />
      <Content filter={filter}>
        <Text always={always} color={color}>
          {title}
        </Text>
      </Content>
    </Container>
  );
};
export default MasonryCard;
