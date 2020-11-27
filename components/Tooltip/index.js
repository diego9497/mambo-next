import { Container, Content } from "./styles";

export default function Tooltip({ children }) {
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: children }}></Content>
    </Container>
  );
}
