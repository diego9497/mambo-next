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
import Link from "next/link";

const Menu = ({ config, close }) => {
  const router = useRouter();

  const onClick = (href) => {
    close();
    router.push(href);
  };
  return (
    <Background>
      <Container>
        <Language>
          <Link href={router.asPath} locale="es" scroll={false}>
            <Lang active={router.locale === "es"}>ES</Lang>
          </Link>
          <p>|</p>
          <Link href={router.asPath} locale="en" scroll={false}>
            <Lang active={router.locale === "en"}>EN</Lang>
          </Link>
        </Language>
        <Options>
          <li onClick={() => onClick("/exhibition/1")}>
            <OptionContent color={config.mv1.color}>
              {config.mv1.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/special/2")}>
            <OptionContent color={config.mv2.color}>
              {config.mv2.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/3")}>
            <OptionContent color={config.mv3.color}>
              {config.mv3.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/4")}>
            <OptionContent color={config.mv4.color}>
              {config.mv4.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/5")}>
            <OptionContent color={config.mv5.color}>
              {config.mv5.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/6")}>
            <OptionContent color={config.mv6.color}>
              {config.mv6.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/7")}>
            <OptionContent color={config.mv7.color}>
              {config.mv7.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/exhibition/8")}>
            <OptionContent color={config.mv8.color}>
              {config.mv8.title} <Next size={22} />
            </OptionContent>
          </li>
          <li onClick={() => onClick("/special/9")}>
            <OptionContent color={config.mv9.color}>
              {config.mv9.title} <Next size={22} />
            </OptionContent>
          </li>
        </Options>
      </Container>
    </Background>
  );
};
export default Menu;
