import Link from "next/link";
import Next from "../Icons/Next";
import { Container, Background, Content, Text } from "./styles";

const MasonryCard = ({ img, title, filter, color, always, href }) => {
  return (
    <Link href={href}>
      <Container>
        <Background src={img} />
        <Content filter={filter}>
          <Text always={always} color={color}>
            <p>{title}</p>
            <Next />
          </Text>
        </Content>
      </Container>
    </Link>
  );
};
export default MasonryCard;
