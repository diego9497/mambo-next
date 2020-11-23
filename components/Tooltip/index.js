import { Container, Content, Triangle } from "./styles";

export default function Tooltip({ children }) {
  return (
    <Container>
      <Triangle />
      <Content>{children}</Content>
    </Container>
  );
}
