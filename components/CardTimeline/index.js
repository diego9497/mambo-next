import { useEffect, useRef } from "react";
import { ContainerCard, ContainerTitleYear, Title, Year } from "./styles";

function CardTimeline({
  scrollIndex,
  index,
  content,
  year,
  textColor,
  ubication,
  onClick,
  color,
}) {
  const el = useRef(null);

  useEffect(() => {
    if (scrollIndex === index) {
      el.current.scrollIntoView();
    }
  }, [scrollIndex]);
  return (
    <ContainerCard
      ref={el}
      onClick={onClick}
      pointUbication={ubication}
      color={color}
    >
      <ContainerTitleYear>
        <Title text={textColor}>{content}</Title>
        <Year text={textColor}>{year}</Year>
      </ContainerTitleYear>
    </ContainerCard>
  );
}
export default CardTimeline;
