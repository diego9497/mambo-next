import MasonryCard from "../MasonryCard";
import { Container, Left, Center, Right } from "./styles";

const Masonry = ({ config }) => {
  return (
    <Container>
      <Left>
        <MasonryCard
          id="1"
          href={`/exhibition/1`}
          filter=" rgba(51, 95, 215, 0.4)"
          color=" rgba(51, 95, 215, 1)"
          title={config.mv1.title}
          img={config.mv1.img.src}
        />
        <MasonryCard
          id="4"
          href={`/exhibition/4`}
          filter="rgba(255, 207, 18, 0.4)"
          color="rgba(255, 207, 18,1)"
          title={config.mv4.title}
          img={config.mv4.img.src}
        />
      </Left>
      <Center>
        <MasonryCard
          id="3"
          href={`/exhibition/3`}
          filter="rgba(237, 150, 174, 0.3)"
          color="rgba(237, 150, 174, 1)"
          title={config.mv3.title}
          img={config.mv3.img.src}
        />
        <MasonryCard
          id="2"
          href={"/special/2"}
          filter="rgba(233, 66, 31, 0.4)"
          color="rgba(233, 66, 31, 1)"
          title={config.mv2.title}
          img={config.mv2.img.src}
        />
        <MasonryCard
          id="6"
          href={`/exhibition/6`}
          filter="rgba(38, 141, 86, 0.3)"
          color="rgba(39, 142, 87, 1)"
          title={config.mv6.title}
          img={config.mv6.img.src}
        />
        <MasonryCard
          id="7"
          href={`/exhibition/7`}
          filter="rgba(97, 51, 161, 0.5)"
          color="rgba(97, 51, 161, 1)"
          title={config.mv7.title}
          img={config.mv7.img.src}
        />
      </Center>
      <Right>
        <MasonryCard
          id="8"
          href={`/exhibition/8`}
          filter="rgba(139, 204, 240, .5)"
          color="rgb(139, 204, 240)"
          title={config.mv8.title}
          img={config.mv8.img.src}
        />
        <MasonryCard
          id="9"
          href={`/special/9`}
          color="rgb(15, 15, 15)"
          title={config.mv9.title}
          img={config.mv9.img.src}
        />
        <MasonryCard
          id="5"
          href={`/exhibition/5`}
          color="rgba(23, 51, 28, 1)"
          filter="rgba(23, 51, 28, .5)"
          title={config.mv5.title}
          img={config.mv5.img.src}
        />
      </Right>
    </Container>
  );
};
export default Masonry;
