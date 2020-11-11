import {
  Container,
  ContainerList,
  ContainerInfo,
  LeftList,
  RightList,
  TitleCard,
  ContainerEmpty,
} from "./style";
import CardTimeline from "../CardTimeline";
import InfoTimeline from "../InfoTimeline";

function Timeline(props) {
  return (
    <Container>
      <ContainerList>
        <LeftList>
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="green" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="pink" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="red" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="green" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="green" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="pink" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="red" />
          <ContainerEmpty />
          <CardTimeline ubication={"right"} color="green" />
        </LeftList>
        <RightList>
          <CardTimeline ubication={"left"} color="blue" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="blue" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="pink" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="pink" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="blue" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="blue" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="pink" />
          <ContainerEmpty />
          <CardTimeline ubication={"left"} color="pink" />
          <ContainerEmpty />
        </RightList>
      </ContainerList>
      <ContainerInfo>
        <InfoTimeline />
      </ContainerInfo>
    </Container>
  );
}

export default Timeline;
