import { Container, Options, MenuButtonContainer, MenuButton } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Menu from "../Icons/Menu";
import Logo from "../Icons/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
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
            <a>EN</a>
          </Link>
          |
          <Link href={router.asPath} locale="es" scroll={false}>
            <a>ES</a>
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
