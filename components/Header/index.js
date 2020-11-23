import {
  Container,
  Options,
  MenuButtonContainer,
  MenuButton,
  Lang,
} from "./styles";
import Accessibility from "../Icons/Accessibility";
import MenuIcon from "../Icons/Menu";
import Logo from "../Icons/Logo";
import Close from "../Icons/Close";
import Menu from "../Menu";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState } from "react";

const Header = ({ config }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

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
          <Link href={router.asPath} locale="es" scroll={false}>
            <Lang active={router.locale === "es"}>ES</Lang>
          </Link>
          <p>|</p>
          <Link href={router.asPath} locale="en" scroll={false}>
            <Lang active={router.locale === "en"}>EN</Lang>
          </Link>
        </div>
        <div>
          <MenuButtonContainer>
            <MenuButton onClick={menuClick}>
              {menuOpen ? <Close /> : <MenuIcon />}
            </MenuButton>
          </MenuButtonContainer>
        </div>
      </Options>
      {menuOpen && <Menu close={handleClose} config={config} />}
    </Container>
  );
};
export default Header;
