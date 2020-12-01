import {
  Container,
  Options,
  MenuButtonContainer,
  MenuButton,
  Lang,
  LogoContainer,
} from "./styles";
import MenuIcon from "../Icons/Menu";
import Logo from "../Icons/Logo";
import Close from "../Icons/Close";
import Menu from "../Menu";
import Link from "../Link";

import ClientPortal from "../ClientPortal";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = ({ config, locale = "es" }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <Container>
      <Link href={locale === "es" ? "/" : "/en"}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
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
                : `/en${router.asPath === "/" ? "" : router.asPath}`
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
      {menuOpen && (
        <ClientPortal selector="#modal">
          <Menu config={config} locale={locale} />
        </ClientPortal>
      )}
    </Container>
  );
};
export default Header;
