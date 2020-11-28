import {
  Container,
  Options,
  MenuButtonContainer,
  MenuButton,
  Lang,
} from "./styles";
import MenuIcon from "../Icons/Menu";
import Logo from "../Icons/Logo";
import Close from "../Icons/Close";
import Menu from "../Menu";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState } from "react";

const Header = ({ config, locale = "es" }) => {
  console.log(process.env.SPA);
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
      <Link href={locale === "es" ? "/" : "/en"}>
        <div>
          <Logo />
        </div>
      </Link>
      <div></div>
      <Options>
        <div></div>
        <div></div>
        <div>
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
                : "/en" + router.asPath
            }
            scroll={false}
          >
            <Lang active={router.asPath.includes("/en")}>EN</Lang>
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
      {menuOpen && <Menu close={handleClose} config={config} locale={locale} />}
    </Container>
  );
};
export default Header;
