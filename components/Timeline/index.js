import {
  Container,
  ContainerList,
  ContainerInfo,
  LeftList,
  RightList,
  ContainerEmpty,
  ContainerHeaderTimeline,
  TextHeaderTimeline,
  ContainerListLeftRight,
} from "./style";
import CardTimeline from "../CardTimeline";
import InfoTimeline from "../InfoTimeline";

import React, { useState } from "react";

function Timeline({ config, timeline }) {
  const [infoCard, setInfoCard] = useState();
  const [open, setOpen] = useState(false);

  const left = timeline.filter((event, index) => index % 2 === 0);
  const right = timeline.filter((event, index) => index % 2 !== 0);

  const handleClick = (event) => {
    setInfoCard({
      ...event,
      content: event.description,
      color: config[`mv${event.id}`].color,
      topic: config[`mv${event.id}`].title,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setInfoCard(null);
    setOpen(false);
  };
  return (
    <Container>
      <ContainerList open={open}>
        <ContainerHeaderTimeline color={config.mv1.color}>
          <TextHeaderTimeline>{config.timeline}</TextHeaderTimeline>
        </ContainerHeaderTimeline>
        <ContainerListLeftRight>
          <LeftList>
            <ContainerEmpty />
            {left.map((event, index) => (
              <>
                <CardTimeline
                  key={index}
                  onClick={() => handleClick(event)}
                  ubication="right"
                  color={config[`mv${event.id}`].color}
                  content={event.title}
                  type={event.type}
                  year={event.year}
                />
                {index === left.length - 1 ? null : <ContainerEmpty />}
              </>
            ))}
          </LeftList>
          <RightList>
            {right.map((event, index) => (
              <>
                <CardTimeline
                  key={index}
                  onClick={() => handleClick(event)}
                  ubication="left"
                  color={config[`mv${event.id}`].color}
                  content={event.title}
                  type={event.type}
                  year={event.year}
                />
                {index === right.length - 1 ? null : <ContainerEmpty />}
              </>
            ))}
          </RightList>
        </ContainerListLeftRight>
      </ContainerList>
      {open && (
        <ContainerInfo>
          <InfoTimeline {...infoCard} handleClose={handleClose} />
        </ContainerInfo>
      )}
    </Container>
  );
}

export default Timeline;
