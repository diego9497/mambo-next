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
import Activities from "../Icons/Activities";
import TimeLine from "../Icons/TimeLine";
import Map from "../Icons/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
function Footer({ exhibition, config, index, choose }) {
  const [openActivities, setOpenActivities] = useState(false);

  const router = useRouter();
  let { title, color, id } = exhibition;
  color = color ? color : config.mv1.color;

  const handleBack = useCallback(() => {
    if (choose) {
      router.push("/");
    } else if (!title) {
      router.back();
    } else {
      router.push(`/exhibition/${id}`);
    }
  }, [router]);

  const clickActivities = () => {
    setOpenActivities(!openActivities);
  };
  return (
    <ContainerFooter>
      <LeftContainer>
        <Anchor onClick={handleBack} color={color}>
          {!index && (
            <ItemOption>
              <Before />
              <Option>{!title || choose ? config.back : title}</Option>
            </ItemOption>
          )}
        </Anchor>
        <Link href={`/exhibition/9/detail`}>
          <Anchor color={color}>
            <ItemOption>
              <Option>{config.mv9.title}</Option>
            </ItemOption>
          </Anchor>
        </Link>
        <Anchor color={color} onClick={clickActivities} active={openActivities}>
          {index && (
            <ItemOption>
              <Activities />
              <Option>{config.activity}</Option>
            </ItemOption>
          )}
          {openActivities && (
            <ContainerActivities>
              <Link href="/exhibition/1/detail?content2=true">
                <a>{config.mv1.title}</a>
              </Link>
              <Link href="/exhibition/3/detail?content2=true">
                <a>{config.mv3.title}</a>
              </Link>
              <Link href="/exhibition/4/detail?content2=true">
                <a>{config.mv4.title}</a>
              </Link>
              <Link href="/exhibition/6/detail?content2=true">
                <a>{config.mv6.title}</a>
              </Link>
              <Link href="/exhibition/8/detail?content2=true">
                <a>{config.mv8.title}</a>
              </Link>
            </ContainerActivities>
          )}
        </Anchor>
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
