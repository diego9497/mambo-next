import {
  Container,
  Options,
  MenuButtonContainer,
  MenuButton,
  Lang,
} from "./styles";
import Accessibility from "../Icons/Accessibility";
import Menu from "../Icons/Menu";
import Logo from "../Icons/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <Container>
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>
      <div></div>
      <Options>
        <div></div>
        <div></div>
        <div>
          <Link href={router.asPath} locale="en" scroll={false}>
            <Lang active={router.locale === "en"}>EN</Lang>
          </Link>
          <p>|</p>
          <Link href={router.asPath} locale="es" scroll={false}>
            <Lang active={router.locale === "es"}>ES</Lang>
          </Link>
        </div>
        <div>
          <button>
            <Accessibility />
          </button>
        </div>
      </Options>
      <MenuButtonContainer>
        <MenuButton>
          <Menu />
        </MenuButton>
      </MenuButtonContainer>
    </Container>
  );
};
export default Header;
