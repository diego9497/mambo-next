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

function Timeline(props) {
  const [infoCard, setInfoCard] = useState();
  const [open, setOpen] = useState(false);

  const events = [
    {
      color: "#3D57D5",
      title: "Esto puede ser largo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 1",
    },
    {
      color: "#ED4040",
      title: "ready mode",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 2",
    },
    {
      color: "#EFB8BC",
      title: "Puede ser mas que largo, muy largo el texto",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 3",
    },
    {
      color: "#F7D44A",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 4",
    },
    {
      color: "#162D1C",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 5",
    },
    {
      color: "#4A8F5C",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 6",
    },
    {
      color: "#6133A1",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 7",
    },
    {
      color: "#9ED1F2",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 8",
    },
    {
      color: "#1A1A1A",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 9",
    },
    {
      color: "#162D1C",
      title: "lorem ipsum algo 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 10",
    },
    {
      color: "#162D1C",
      title: "lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 11",
    },
    {
      color: "#ED4040",
      title: "ready mode lorem",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 12",
    },
    {
      color: "#ED4040",
      title: "ready mode",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 13",
    },
    {
      color: "#ED4040",
      title: "ready",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo aperiam dolorum sint, suscipit nemo cupiditate doloremque exercitationem voluptas, unde porro! Doloremque provident eveniet. 14",
    },
  ];

  const left = events.filter((event, index) => index % 2 === 0);
  const right = events.filter((event, index) => index % 2 !== 0);

  const handleClick = (event) => {
    setInfoCard(event);
    setOpen(true);
  };
  return (
    <Container>
      {open && (
        <ContainerInfo>
          <InfoTimeline {...infoCard} />
        </ContainerInfo>
      )}
      <ContainerList>
        <ContainerHeaderTimeline>
          <TextHeaderTimeline>Linea de tiempo</TextHeaderTimeline>
          <ContainerIconHeaderTimeline>
            <Menu fill="white" />
          </ContainerIconHeaderTimeline>
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
                  color={event.color}
                  content={event.title}
                />
                <ContainerEmpty />
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
                  color={event.color}
                  content={event.title}
                />
                <ContainerEmpty />
              </>
            ))}
          </RightList>
        </ContainerListLeftRight>
      </ContainerList>
    </Container>
  );
}

export default Timeline;
