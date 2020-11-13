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

  return (
    <Container>
      <ContainerInfo>
        <InfoTimeline />
      </ContainerInfo>
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
            <CardTimeline
              ubication={"right"}
              color="green"
              content="Esto puede ser largo"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="pink"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="red"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="green"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="green"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="pink"
              content="Puede ser mas que largo, muy largo el texto"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="red"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"right"}
              color="green"
              content="Ready-Made"
            />
          </LeftList>
          <RightList>
            <CardTimeline
              ubication={"left"}
              color="blue"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="blue"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="pink"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="pink"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="blue"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="blue"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="pink"
              content="Ready-Made"
            />
            <ContainerEmpty />
            <CardTimeline
              ubication={"left"}
              color="pink"
              content="Ready-Made"
            />
            <ContainerEmpty />
          </RightList>
        </ContainerListLeftRight>
      </ContainerList>
    </Container>
  );
}

export default Timeline;
