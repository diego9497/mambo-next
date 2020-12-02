import { useEffect, useState } from "react";
import {
  Container,
  ContainerList,
  ContainerDetail,
  ContainerMap,
  List,
  ListItem,
  HeaderMap,
  HeaderMapIconContainer,
} from "./styles";

import MapIcon from "../Icons/Map";
import CardPlaceMilestone from "../CardPlaceMilestone";
import Close from "../Icons/Close";
import MenuIcon from "../Icons/Menu";
import Map from "../Map";

export default function MapPage({ config, locations }) {
  const [center, setCenter] = useState([20, 0]);
  const [zoom, setZoom] = useState(2);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [openList, setOpenList] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const handleClose = () => {
    setOpen(false);
    setZoom(2);
    setCenter([51.505, -0.09]);
  };

  const handleOpen = (location) => {
    setOpen(true);
    setDetailInfo({
      ...location,
      color: config[`mv${location.id}`].color,
      text: config[`mv${location.id}`].text,
      topic: config[`mv${location.id}`].title,
    });
    setCenter(location.location);
    setZoom(15);
  };

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const clickOnMarker = (index) => {
    setCurrent(index);
    setOpen(true);
  };

  useEffect(() => {
    if (current) {
      const location = locations[current];
      setDetailInfo({
        ...location,
        color: config[`mv${location.id}`].color,
        text: config[`mv${location.id}`].text,
        topic: config[`mv${location.id}`].title,
      });
      setCenter(location.location);
      setZoom(15);
    }
  }, [current]);
  return (
    <Container>
      <ContainerList color={config.mv1.color} open={openList}>
        <List>
          {locations.map((location, index) => (
            <ListItem
              fill={config[`mv${location.id}`].color}
              onClick={() => handleOpen(location)}
              color={config.mv1.color}
            >
              <MapIcon />
              <span>{location.name}</span>
            </ListItem>
          ))}
        </List>
      </ContainerList>
      <ContainerMap>
        <HeaderMap color={config.mv1.color}>
          <span>{config.map}</span>
          <HeaderMapIconContainer onClick={handleClickList}>
            {openList ? <Close /> : <MenuIcon />}
          </HeaderMapIconContainer>
        </HeaderMap>
        <div className="map">
          {process.env.SPA ? (
            <Map
              markers={locations.map((location) => ({
                ...location,
                color: config[`mv${location.id}`].color,
              }))}
              center={center}
              zoom={zoom}
              handleClick={clickOnMarker}
            />
          ) : (
            <img src="/mapa.png" alt="" />
          )}
        </div>
      </ContainerMap>
      {open && (
        <ContainerDetail>
          <CardPlaceMilestone
            color={detailInfo.color}
            content={detailInfo.description}
            text={detailInfo.text}
            title={detailInfo.name}
            subtitle={detailInfo.topic}
            handleClose={handleClose}
            iconHeader={<MapIcon />}
            controls={false}
          ></CardPlaceMilestone>
        </ContainerDetail>
      )}
    </Container>
  );
}
