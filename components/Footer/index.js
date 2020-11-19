import {
  ContainerFooter,
  TimeLineMapContainer,
  LeftContainer,
  Anchor,
  Option,
  ItemOption,
} from "./styles";
import Before from "../Icons/Before";
import Activities from "../Icons/Activities";
import TimeLine from "../Icons/TimeLine";
import Map from "../Icons/Map";
import Link from "next/link";
import { useRouter } from "next/router";
function Footer({ exhibition, config }) {
  const { title, color, id } = exhibition;
  const router = useRouter();

  const handleBack = () => {
    if (title) {
      router.push(`/exhibition/${id}`);
    } else {
      router.back();
    }
  };
  return (
    <ContainerFooter>
      <LeftContainer>
        <Anchor onClick={handleBack} color={color}>
          <ItemOption>
            <Before />
            <Option>{title ? title : config.back}</Option>
          </ItemOption>
        </Anchor>
        <Link href={`/exhibition/9/detail`}>
          <Anchor color={color}>
            <ItemOption>
              <Option>{config.mv9.title}</Option>
            </ItemOption>
          </Anchor>
        </Link>
        <Link href="">
          <Anchor color={color}>
            {exhibition.activity && (
              <ItemOption>
                <Activities />
                <Option>{config.activity}</Option>
              </ItemOption>
            )}
          </Anchor>
        </Link>
      </LeftContainer>
      <TimeLineMapContainer>
        <Link href="/timeline">
          <Anchor color={color}>
            <ItemOption>
              <TimeLine />
              <Option>{config.timeline}</Option>
            </ItemOption>
          </Anchor>
        </Link>
        <Link href="">
          <Anchor color={color}>
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
