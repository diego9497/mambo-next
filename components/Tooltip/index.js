import { Container, Content } from "./styles";

export default function Tooltip({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
