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
  Filters,
  Check,
  ShowAll,
  FilterModal,
  FilterOptions,
} from "./style";
import CardTimeline from "../CardTimeline";
import InfoTimeline from "../InfoTimeline";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Timeline({ config, timeline }) {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(null);
  const [infoCard, setInfoCard] = useState();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [scrollIndex, setScrollIndex] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const tAux = timeline.map((timeline, index) => ({
      ...timeline,
      key: index,
    }));
    const eventsAux = tAux.filter((event) => filters.includes(event.id));
    setEvents(eventsAux);
    setCurrent(eventsAux[0].key);
  }, [filters]);

  useEffect(() => {
    if (events.length > 0) {
      const event = events.filter((evt) => evt.key === current)[0];
      setInfoCard({
        ...event,
        content: event.description,
        color: config[`mv${event.id}`].color,
        text: config[`mv${event.id}`].text,
        topic: config[`mv${event.id}`].title,
      });
    }
  }, [current]);

  useEffect(() => {
    const id = parseInt(router.asPath.split("#")[1]);
    if (id) {
      setScrollIndex(id);
      setCurrent(id);
      setOpen(true);
    }
  }, [router.query]);

  const handleClick = (key) => {
    router.push(router.pathname + "#" + key);
    setCurrent(key);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    router.push(`${router.pathname}#${current + 1}`);
    setCurrent(current + 1);
  };
  const handlePrev = () => {
    router.push(`${router.pathname}#${current - 1}`);
    setCurrent(current - 1);
  };

  const handleFilter = (id) => {
    if (filters.includes(id)) {
      if (filters.length === 1) {
        alert("Al menos debe haber un filtro seleccionado");
        return null;
      }
      const aux = filters.filter((filter) => filter !== id);
      setFilters(aux);
    } else {
      setFilters([...filters, id]);
    }
  };

  const handleAllFilters = () => {
    setFilters([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  const handleOpenFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  return (
    <Container>
      <ContainerList>
        <ContainerHeaderTimeline color={config.mv1.color}>
          <TextHeaderTimeline>
            {config.timeline.toUpperCase()} {config.subtime}
          </TextHeaderTimeline>
        </ContainerHeaderTimeline>
        <Filters>
          <FilterModal onClick={handleOpenFilters}>
            <p>{config.filters}</p>
          </FilterModal>
          <FilterOptions open={filtersOpen}>
            <div onClick={() => handleFilter(1)}>
              <Check color={config.mv1.color} check={filters.includes(1)} />
              <p>{config.mv1.title}</p>
            </div>
            <div onClick={() => handleFilter(3)}>
              <Check color={config.mv3.color} check={filters.includes(3)} />
              <p>{config.mv3.title}</p>
            </div>
            <div onClick={() => handleFilter(4)}>
              <Check color={config.mv4.color} check={filters.includes(4)} />
              <p>{config.mv4.title}</p>
            </div>
            <div onClick={() => handleFilter(5)}>
              <Check color={config.mv5.color} check={filters.includes(5)} />
              <p>{config.mv5.title}</p>
            </div>
            <div onClick={() => handleFilter(6)}>
              <Check color={config.mv6.color} check={filters.includes(6)} />
              <p>{config.mv6.title}</p>
            </div>
            <div onClick={() => handleFilter(7)}>
              <Check color={config.mv7.color} check={filters.includes(7)} />
              <p>{config.mv7.title}</p>
            </div>
            <div onClick={() => handleFilter(8)}>
              <Check color={config.mv8.color} check={filters.includes(8)} />
              <p>{config.mv8.title}</p>
            </div>
            <div onClick={() => handleFilter(9)}>
              <Check color={config.mv9.color} check={filters.includes(9)} />
              <p>{config.mv9.title}</p>
            </div>
            <div onClick={() => handleFilter(10)}>
              <Check color={config.mv10.color} check={filters.includes(10)} />
              <p>{config.mv10.title}</p>
            </div>
            <div onClick={handleAllFilters}>
              <ShowAll>{config.showAll}</ShowAll>
            </div>
          </FilterOptions>
        </Filters>
        <ContainerCards>
          {events.map((event, index) => {
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
            last={current === events.length - 1}
            first={current === 0}
          />
        </ContainerInfo>
      )}
    </Container>
  );
}

export default Timeline;
