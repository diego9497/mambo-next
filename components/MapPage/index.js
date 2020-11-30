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

export default function MapPage({ config }) {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(2);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [openList, setOpenList] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const locations = [
    {
      id: 1,
      name: "Museo de Arte Moderno de Bogotá",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 1",
      location: [4.610238600000005, -74.0692515],
      color: "#FF5252",
    },
    {
      id: 2,
      name: "Parque Bicentenario",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 2",
      location: [1.610238600000005, -72.0692515],
      color: "#FFEA00",
    },
    {
      id: 3,
      name: "Gran Bretaña (Islas Británicas)",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 3",
      location: [48.85661400000001, 2.3522218999999955],
      color: "#558B2F",
    },
    {
      id: 4,
      name: "París (Francia)",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 4",
      location: [51.50735089999999, -0.12775830000001487],
      color: "#673AB7",
    },
  ];

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
          <Map
            markers={locations.map((location) => ({
              ...location,
              color: config[`mv${location.id}`].color,
            }))}
            center={center}
            zoom={zoom}
            handleClick={clickOnMarker}
          />
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
