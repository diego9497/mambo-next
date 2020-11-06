import MasonryCard from "../MasonryCard";
import { Container, Left, Center, Right } from "./styles";

const Masonry = (props) => {
  return (
    <Container>
      <Left>
        <MasonryCard
          filter=" rgba(51, 95, 215, 0.4)"
          color=" rgba(51, 95, 215, 1)"
          title="MAMBO POP UP"
          img="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
          always
        />
        <MasonryCard
          filter="rgba(255, 207, 18, 0.4)"
          color="rgba(255, 207, 18,1)"
          title="Arte Moderno en Colombia"
          img="https://artebogota.files.wordpress.com/2013/02/mambo.jpg"
        />
      </Left>
      <Center>
        <MasonryCard
          filter="rgba(237, 150, 174, 0.3)"
          color="rgba(237, 150, 174, 1)"
          title="Arte Moderno en el Mundo"
          img="https://images.adsttc.com/media/images/59b6/a0e8/b22e/3850/9800/0020/medium_jpg/_MAMBO_Fachada_Norte___-__Rogelio_Salmona__-__Juli%C3%A1n_Jerez_V_.jpg?1505140958"
        />
        <MasonryCard
          filter="rgba(233, 66, 31, 0.4)"
          color="rgba(233, 66, 31, 1)"
          title="Exposición MAMBO Viajero"
          always
          img="https://premioluiscaballero.gov.co/2017/wp-content/uploads/2017/06/mambo.jpg"
        />
        <MasonryCard
          filter="rgba(38, 141, 86, 0.3)"
          img="https://image.freepik.com/foto-gratis/gente-mochilas-caminando-calle_23-2147656211.jpg"
        />
        <MasonryCard
          filter="rgba(166, 113, 196, 0.5)"
          img="https://imgcdn.larepublica.co/i/768/2019/11/29200612/mambo.jpg"
        />
      </Center>
      <Right></Right>
    </Container>
  );
};
export default Masonry;
