import { useState } from "react";
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

export default function MapPage({ config }) {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const locations = [
    {
      id: 1,
      name: "Museo de Arte Moderno de Bogotá",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 1",
    },
    {
      id: 2,
      name: "Parque Bicentenario",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 2",
    },
    {
      id: 3,
      name: "Gran Bretaña (Islas Británicas)",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 3",
    },
    {
      id: 4,
      name: "París (Francia)",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 4",
    },
    {
      id: 5,
      name: "Museo de Arte Moderno de Bogotá",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 4",
    },
    {
      id: 6,
      name: "Museo de Arte Moderno de Bogotá",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 6",
    },
    {
      id: 7,
      name: "Museo de Arte Moderno de Bogotá",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas recusandae saepe ipsum maxime placeat, sit ab at officiis cupiditate quod, ducimus voluptate molestiae nam corporis sint a. Corporis, quae! 7",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (location) => {
    setOpen(true);
    setDetailInfo({
      ...location,
      color: config[`mv${location.id}`].color,
      topic: config[`mv${location.id}`].title,
    });
  };

  const handleClickList = () => {
    setOpenList(!openList);
  };

  return (
    <Container>
      <ContainerList color={config.mv1.color} open={openList}>
        <List>
          {locations.map((location) => (
            <ListItem
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
          <img src="/image/mapa.png" alt="" />
          <span>Imagen de referencia</span>
        </div>
      </ContainerMap>
      {open && (
        <ContainerDetail>
          <CardPlaceMilestone
            color={detailInfo.color}
            content={detailInfo.description}
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
