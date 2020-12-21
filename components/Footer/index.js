import {
  ContainerFooter,
  TimeLineMapContainer,
  LeftContainer,
  Option,
  ItemOption,
  ContainerActivities,
  Empty,
} from "./styles";
import Before from "../Icons/Before";
import Game from "../Icons/Game";
import TimeLine from "../Icons/TimeLine";
import Map from "../Icons/Map";
import Next from "../Icons/Next";
import Link from "../Link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
function Footer({ exhibition, config, index, choose, locale = "es" }) {
  const [openGames, setOpenGames] = useState(false);

  const router = useRouter();
  let { title, color, text, id } = exhibition;
  color = color ? color : config.mv1.color;

  const handleBack = useCallback(() => {
    if (choose || exhibition.id === 9 || exhibition.id === 2) {
      router.push(locale === "es" ? "/" : "/en");
    } else if (!title) {
      router.back();
    } else {
      router.push(
        locale === "es" ? `/exhibition/${id}` : `/en/exhibition/${id}`
      );
    }
  }, [router]);

  const clickGames = () => {
    setOpenGames(!openGames);
  };
  return (
    <ContainerFooter>
      <LeftContainer>
        {!index ? (
          <ItemOption onClick={handleBack} text={text} color={color}>
            <Before />
            <Option>
              {!title || choose || exhibition.id === 9 || exhibition.id === 2
                ? config.back
                : title}
            </Option>
          </ItemOption>
        ) : (
            <Empty></Empty>
          )}
        {!index && exhibition.id !== 9 ? (
          <Link href={locale === "es" ? `/special/9` : `/en/special/9`}>
            <ItemOption text="white" color="black">
              <Option>{config.mv9.title}</Option>
            </ItemOption>
          </Link>
        ) : (
            <Empty></Empty>
          )}
        <ItemOption
          onClick={clickGames}
          text={text}
          color={color}
          active={openGames}
        >
          <Game />
          <Option>{config.games}</Option>
          {openGames && (
            <ContainerActivities>
              <li>
                <a href="/juegos/#/login?play=0">
                  Trivia
                  <Next size={22} />
                </a>
              </li>
              <li>
                <a href="/juegos/#/login?play=1">
                  Cruza con zapatos
                  <Next size={22} />
                </a>
              </li>
              <li>
                <a href="/juegos/#/login?play=2">
                  Runner
                  <Next size={22} />
                </a>
              </li>
            </ContainerActivities>
          )}
        </ItemOption>
      </LeftContainer>
      <TimeLineMapContainer>
        <Link href={locale === "es" ? "/timeline" : "/en/timeline"}>
          <ItemOption text={text} color={color}>
            <TimeLine />
            <Option>{config.timeline}</Option>
          </ItemOption>
        </Link>
        <Link href={locale === "es" ? "/map" : "/en/map"}>
          <ItemOption text={text} color={color}>
            <Map />
            <Option>{config.map}</Option>
          </ItemOption>
        </Link>
      </TimeLineMapContainer>
    </ContainerFooter>
  );
}

export default Footer;
