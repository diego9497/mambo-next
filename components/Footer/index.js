import {
  ContainerFooter,
  ItemOption,
  ContainerIcon,
  Option,
  A,
} from "./styles";
import Before from "../Icons/Before";
import Activities from "../Icons/Activities";
import Map from "../Icons/Map";
import TimeLine from "../Icons/TimeLine";
import Link from "next/link";
function Footer({ exhibition, config }) {
  const { title, id } = exhibition;
  return (
    <ContainerFooter>
      <Link href={`/exhibition/${id}`}>
        <A>
          <ItemOption>
            <Before />
            <Option>{title}</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon></ContainerIcon>
            <Option>NUEVOS MEDIOS</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <Activities />
            <Option>{config.activity}</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
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
