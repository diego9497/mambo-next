import {
  ContainerFooter,
  TimeLineMapContainer,
  LeftContainer,
  Anchor,
  Option,
  ItemOption,
  ContainerActivities,
} from "./styles";
import Before from "../Icons/Before";
import Game from "../Icons/Game";
import TimeLine from "../Icons/TimeLine";
import Map from "../Icons/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
function Footer({ exhibition, config, index, choose }) {
  const [openGames, setOpenGames] = useState(false);

  const router = useRouter();
  let { title, color, text, id } = exhibition;
  color = color ? color : config.mv1.color;

  const handleBack = useCallback(() => {
    if (choose || exhibition.id === 9 || exhibition.id === 2) {
      router.push("/");
    } else if (!title) {
      router.back();
    } else {
      router.push(`/exhibition/${id}`);
    }
  }, [router]);

  const clickGames = () => {
    setOpenGames(!openGames);
  };
  return (
    <ContainerFooter>
      <LeftContainer>
        <Anchor onClick={handleBack} text={text} color={color}>
          {!index && (
            <ItemOption>
              <Before />
              <Option>
                {!title || choose || exhibition.id === 9 || exhibition.id === 2
                  ? config.back
                  : title}
              </Option>
            </ItemOption>
          )}
        </Anchor>
        {!index && exhibition.id !== 9 ? (
          <Link href={`/special/9`}>
            <Anchor text="white" color="black">
              <ItemOption>
                <Option>{config.mv9.title}</Option>
              </ItemOption>
            </Anchor>
          </Link>
        ) : null}
        <Anchor
          text={text}
          color={color}
          onClick={clickGames}
          active={openGames}
        >
          <ItemOption>
            <Game />
            <Option>{config.games}</Option>
          </ItemOption>
          {openGames && (
            <ContainerActivities>
              <a>Trivia</a>
              <a>Rana</a>
              <a>Runner</a>
            </ContainerActivities>
          )}
        </Anchor>
      </LeftContainer>
      <TimeLineMapContainer>
        <Link href="/timeline">
          <Anchor text={text} color={color}>
            <ItemOption>
              <TimeLine />
              <Option>{config.timeline}</Option>
            </ItemOption>
          </Anchor>
        </Link>
        <Link href="/map">
          <Anchor text={text} color={color}>
            <ItemOption>
              <Map />
              <Option>{config.map}</Option>
            </ItemOption>
          </Anchor>
        </Link>
      </TimeLineMapContainer>
    </ContainerFooter>
  );
}

export default Footer;
