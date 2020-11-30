import { ContainerCard, ContainerTitleYear, Title, Year } from "./styles";

function CardTimeline(props) {
  return (
    <ContainerCard
      onClick={props.onClick}
      pointUbication={props.ubication}
      color={props.color}
    >
      <ContainerTitleYear>
        <Title text={props.textColor}>{props.content}</Title>
        <Year text={props.textColor}>{props.year}</Year>
      </ContainerTitleYear>
    </ContainerCard>
  );
}
export default CardTimeline;
