import {
  Container,
  ContainerList,
  ContainerInfo,
  LeftList,
  RightList,
  ContainerEmpty,
  ContainerHeaderTimeline,
  TextHeaderTimeline,
  ContainerIconHeaderTimeline,
  ContainerListLeftRight,
} from "./style";
import CardTimeline from "../CardTimeline";
import InfoTimeline from "../InfoTimeline";
import Menu from "../Icons/Menu";

import React, { useState } from "react";

function Timeline({ config }) {
  const [infoCard, setInfoCard] = useState();
  const [open, setOpen] = useState(false);

  const events = [
    {
      id: 1,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 3,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 1,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 2,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 8,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 4,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 5,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 7,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 8,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 5,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 2,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 6,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 9,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 5,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 2,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
    {
      id: 7,
      title: "Esto puede ser largo",
      year: "1992",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
      type: "image",
    },
  ];

  const left = events.filter((event, index) => index % 2 === 0);
  const right = events.filter((event, index) => index % 2 !== 0);

  const handleClick = (event) => {
    setInfoCard({
      ...event,
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
      {open && (
        <ContainerInfo>
          <InfoTimeline {...infoCard} handleClose={handleClose} />
        </ContainerInfo>
      )}
      <ContainerList open={open}>
        <ContainerHeaderTimeline color={config.mv1.color}>
          <TextHeaderTimeline>{config.timeline}</TextHeaderTimeline>
          {/* <ContainerIconHeaderTimeline>
            <Menu fill="white" />
          </ContainerIconHeaderTimeline> */}
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
                />
                {index === right.length - 1 ? null : <ContainerEmpty />}
              </>
            ))}
          </RightList>
        </ContainerListLeftRight>
      </ContainerList>
    </Container>
  );
}

export default Timeline;
