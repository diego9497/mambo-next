import { Container } from "../Header/styles";
import {
  ContainerCard,
  ContainerTitleYear,
  Title,
  Year,
  ContainerImage,
  ImageCard,
} from "./style";

function CardTimeline(props) {
  return (
    <ContainerCard
      onClick={props.onClick}
      pointUbication={props.ubication}
      color={props.color}
    >
      <ContainerTitleYear>
        <Title>{props.content}</Title>
        <Year>1910</Year>
      </ContainerTitleYear>
      <ContainerImage />
    </ContainerCard>
  );
}
export default CardTimeline;
