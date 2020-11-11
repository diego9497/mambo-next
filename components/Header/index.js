import { Container, Options } from "./styles";
import Accessibility from "../Icons/Accessibility";
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
          <Link href={router.asPath} locale="en">
            <a>EN</a>
          </Link>
          |
          <Link href={router.asPath} locale="es">
            <a>ES</a>
          </Link>
        </div>
        <div>
          <button>
            <Accessibility />
          </button>
        </div>
      </Options>
    </Container>
  );
};
export default Header;
