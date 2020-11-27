import Link from "next/link";
import Next from "../Icons/Next";
import Image from "../Image";
import { Container, Background, Content, Text } from "./styles";

const MasonryCard = ({ img, title, filter, color, always, href, position }) => {
  return (
    <Link href={href}>
      <Container>
        <Background>
          <Image src={img} width={600} height={400} position={position} />
        </Background>
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
