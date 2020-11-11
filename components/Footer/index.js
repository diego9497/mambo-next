import {
  ContainerFooter,
  ContainerBack,
  ItemOption,
  Option,
  A,
} from "./styles";
import Before from "../Icons/Before";
import Activities from "../Icons/Activities";
import TimeLine from "../Icons/TimeLine";
import Map from "../Icons/Map";
import Next from "../Icons/Next";
import Link from "next/link";
function Footer({ exhibition, config }) {
  const { title, id } = exhibition;
  return (
    <ContainerFooter>
      <ContainerBack>
        <Link href={`/exhibition/${id}`}>
          <A>
            <ItemOption>
              <Before />
              <Option>{title ? title : config.back}</Option>
            </ItemOption>
          </A>
        </Link>
      </ContainerBack>
      <Link
        href={
          exhibition.next ? `/exhibition/${exhibition.next.id}/detail` : "#"
        }
      >
        <A>
          {exhibition.next && (
            <ItemOption>
              <Next />
              <Option>{exhibition.next.title}</Option>
            </ItemOption>
          )}
        </A>
      </Link>
      <Link href="">
        <A>
          {exhibition.activity && (
            <ItemOption>
              <Activities />
              <Option>{config.activity}</Option>
            </ItemOption>
          )}
        </A>
      </Link>
      <Link href="/timeline">
        <A>
          <ItemOption>
            <TimeLine />
            <Option>{config.timeline}</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <Map />
            <Option>{config.map}</Option>
          </ItemOption>
        </A>
      </Link>
    </ContainerFooter>
  );
}

export default Footer;
