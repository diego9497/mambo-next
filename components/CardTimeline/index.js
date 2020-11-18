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
        <Title>{props.content}</Title>
        <Year>1910</Year>
      </ContainerTitleYear>
      <ContainerImage>
        {props.type === "image" ? <Photo /> : <Video />}
      </ContainerImage>
    </ContainerCard>
  );
}
export default CardTimeline;
