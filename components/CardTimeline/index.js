import Video from "../Icons/Video";
import Photo from "../Icons/Photo";
import {
  ContainerCard,
  ContainerTitleYear,
  Title,
  Year,
  ContainerImage,
} from "./styles";

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
      <ContainerImage text={props.textColor}>
        {props.type === "image" ? <Photo /> : <Video />}
      </ContainerImage>
    </ContainerCard>
  );
}
export default CardTimeline;
