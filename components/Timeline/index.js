import {
  Container,
  ContainerList,
  ContainerInfo,
  ContainerEmpty,
  ContainerHeaderTimeline,
  TextHeaderTimeline,
  ContainerCards,
  CardTimelineLeft,
  CardTimelineRight,
} from "./style";
import CardTimeline from "../CardTimeline";
import InfoTimeline from "../InfoTimeline";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Timeline({ config, timeline }) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [infoCard, setInfoCard] = useState();
  const [open, setOpen] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(null);

  const tAux = timeline.map((timeline, index) => ({ ...timeline, key: index }));

  const handleClick = (key) => {
    router.push(router.pathname + "#" + key);
    setCurrent(key);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrent(current + 1);
  };
  const handlePrev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    const event = tAux.filter((evt) => evt.key === current)[0];
    setInfoCard({
      ...event,
      content: event.description,
      color: config[`mv${event.id}`].color,
      text: config[`mv${event.id}`].text,
      topic: config[`mv${event.id}`].title,
    });
  }, [current]);

  useEffect(() => {
    const id = parseInt(router.asPath.split("#")[1]);
    if (id) {
      setScrollIndex(id);
      setCurrent(id);
      setOpen(true);
    }
  }, [router.query]);

  return (
    <Container>
      <ContainerList open={open}>
        <ContainerHeaderTimeline color={config.mv1.color}>
          <TextHeaderTimeline>{config.timeline}</TextHeaderTimeline>
        </ContainerHeaderTimeline>
        <ContainerCards>
          {tAux.map((event, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <CardTimelineLeft>
                    <CardTimeline
                      key={event.key}
                      index={event.key}
                      onClick={() => handleClick(event.key)}
                      ubication="right"
                      color={config[`mv${event.id}`].color}
                      content={event.title}
                      type={event.type}
                      year={event.year}
                      textColor={config[`mv${event.id}`].text}
                      scrollIndex={scrollIndex}
                    />
                  </CardTimelineLeft>
                  <ContainerEmpty />
                </>
              );
            } else {
              return (
                <>
                  <ContainerEmpty />
                  <CardTimelineRight>
                    <CardTimeline
                      key={event.key}
                      index={event.key}
                      onClick={() => handleClick(event.key)}
                      ubication="left"
                      color={config[`mv${event.id}`].color}
                      content={event.title}
                      type={event.type}
                      year={event.year}
                      textColor={config[`mv${event.id}`].text}
                      scrollIndex={scrollIndex}
                    />
                  </CardTimelineRight>
                </>
              );
            }
          })}
        </ContainerCards>
      </ContainerList>
      {open && (
        <ContainerInfo>
          <InfoTimeline
            {...infoCard}
            handleClose={handleClose}
            handleNext={handleNext}
            handlePrev={handlePrev}
            last={current === tAux.length - 1}
            first={current === 0}
          />
        </ContainerInfo>
      )}
    </Container>
  );
}

export default Timeline;
