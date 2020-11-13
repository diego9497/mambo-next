import Link from "next/link";
import Next from "../Icons/Next";
import { Container, Background, Content, Text } from "./styles";

const MasonryCard = ({ img, title, filter, color, always, id }) => {
  function ChooseLink({ children }) {
    switch (process.env.NODE_ENV) {
      case "development":
        return (
          <Link href={`/exhibition/${id}`}>
            <Container>{children}</Container>
          </Link>
        );
      case "production":
        // return (
        //   <Container href={`./exhibition/${id}.html`}>{children}</Container>
        // );
        return (
          <Link href={`/exhibition/${id}`}>
            <Container>{children}</Container>
          </Link>
        );
    }
  }

  return (
    <ChooseLink>
      <>
        <Background src={img} />
        <Content filter={filter}>
          <Text always={always} color={color}>
            <p>{title}</p>
            <Next />
          </Text>
        </Content>
      </>
    </ChooseLink>
  );
};
export default MasonryCard;
