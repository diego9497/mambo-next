import Link from "next/link";
import Next from "../Icons/Next";
import Image from "next/image";
import { Container, Background, Content, Text } from "./styles";

const MasonryCard = ({ img, title, filter, color, always, href, bottom }) => {
  return (
    <Link href={href}>
      <Container>
        <Background bottom={bottom}>
          <Image
            src={img}
            layout="fixed"
            width={600}
            height={400}
            quality={90}
            loading="eager"
          />
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
