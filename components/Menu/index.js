import {
  Background,
  Container,
  Language,
  Lang,
  Option,
  OptionContent,
  Options,
} from "./styles";
import Next from "../Icons/Next";
import { useRouter } from "next/router";
import Link from "../Link";

const Menu = ({ config }) => {
  const router = useRouter();

  return (
    <Background>
      <Container>
        <Language>
          <Link
            href={
              router.asPath.replace("/en", "") !== ""
                ? router.asPath.replace("/en", "")
                : "/"
            }
            scroll={false}
          >
            <Lang active={!router.asPath.includes("/en")}>ES</Lang>
          </Link>
          <p>|</p>
          <Link
            href={
              router.asPath.includes("en")
                ? router.asPath
                : `/en${router.asPath === "/" ? "" : router.asPath}`
            }
            scroll={false}
          >
            <Lang active={router.asPath.includes("/en")}>EN</Lang>
          </Link>
        </Language>
        <Options>
          <Link href="/exhibition/1">
            <OptionContent color={config.mv1.color}>
              {config.mv1.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/special/2">
            <OptionContent color={config.mv2.color}>
              {config.mv2.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/3">
            <OptionContent color={config.mv3.color}>
              {config.mv3.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/4">
            <OptionContent color={config.mv4.color}>
              {config.mv4.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/5">
            <OptionContent color={config.mv5.color}>
              {config.mv5.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/6">
            <OptionContent color={config.mv6.color}>
              {config.mv6.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/7">
            <OptionContent color={config.mv7.color}>
              {config.mv7.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/exhibition/8">
            <OptionContent color={config.mv8.color}>
              {config.mv8.title} <Next size={22} />
            </OptionContent>
          </Link>
          <Link href="/special/9">
            <OptionContent color={config.mv9.color}>
              {config.mv9.title} <Next size={22} />
            </OptionContent>
          </Link>
        </Options>
      </Container>
    </Background>
  );
};
export default Menu;
