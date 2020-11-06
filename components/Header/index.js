import { Container, Options } from "./styles";
import Accessibility from "../Icons/Accessibility";
import Logo from "../Icons/Logo";
import Link from "next/link";

const Header = (props) => {
  return (
    <Container>
      <div>
        <Logo />
      </div>
      <div></div>
      <Options>
        <div></div>
        <div></div>
        <div>
          <Link href="">
            <a>EN</a>
          </Link>
          |
          <Link href="">
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
