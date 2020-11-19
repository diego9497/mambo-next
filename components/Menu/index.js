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

const Menu = ({ config }) => {
  const router = useRouter();

  return (
    <Background>
      <Container>
        <Language>
          <Link href={router.asPath} locale="en" scroll={false}>
            <Lang active={router.locale === "en"}>EN</Lang>
          </Link>
          <p>|</p>
          <Link href={router.asPath} locale="es" scroll={false}>
            <Lang active={router.locale === "es"}>ES</Lang>
          </Link>
        </Language>
        <Options>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv1.color}>
                {config.mv1.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv2.color}>
                {config.mv2.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv3.color}>
                {config.mv3.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv4.color}>
                {config.mv4.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv5.color}>
                {config.mv5.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv6.color}>
                {config.mv6.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv7.color}>
                {config.mv7.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv8.color}>
                {config.mv8.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
          <Option>
            <Link href="/">
              <OptionContent color={config.mv9.color}>
                {config.mv9.title} <Next size={22} />
              </OptionContent>
            </Link>
          </Option>
        </Options>
      </Container>
    </Background>
  );
};
export default Menu;
