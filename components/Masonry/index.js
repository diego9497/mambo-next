import MasonryCard from "../MasonryCard";
import { Container, Left, Center, Right } from "./styles";

const Masonry = (props) => {
  return (
    <Container>
      <Left>
        <MasonryCard
          id="1"
          filter=" rgba(51, 95, 215, 0.4)"
          color=" rgba(51, 95, 215, 1)"
          title="MAMBO POP UP"
          img="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
          always
        />
        <MasonryCard
          id="4"
          filter="rgba(255, 207, 18, 0.4)"
          color="rgba(255, 207, 18,1)"
          title="Arte Moderno en Colombia"
          img="https://artebogota.files.wordpress.com/2013/02/mambo.jpg"
        />
      </Left>
      <Center>
        <MasonryCard
          id="3"
          filter="rgba(237, 150, 174, 0.3)"
          color="rgba(237, 150, 174, 1)"
          title="Arte Moderno en el Mundo"
          img="https://images.adsttc.com/media/images/59b6/a0e8/b22e/3850/9800/0020/medium_jpg/_MAMBO_Fachada_Norte___-__Rogelio_Salmona__-__Juli%C3%A1n_Jerez_V_.jpg?1505140958"
        />
        <MasonryCard
          id="2"
          filter="rgba(233, 66, 31, 0.4)"
          color="rgba(233, 66, 31, 1)"
          title="Exposición MAMBO Viajero"
          always
          img="https://premioluiscaballero.gov.co/2017/wp-content/uploads/2017/06/mambo.jpg"
        />
        <MasonryCard
          id="6"
          filter="rgba(38, 141, 86, 0.3)"
          color="rgba(39, 142, 87, 1)"
          title=" Arte Conceptual en Colombia"
          img="https://image.freepik.com/foto-gratis/gente-mochilas-caminando-calle_23-2147656211.jpg"
        />
        <MasonryCard
          id="7"
          filter="rgba(97, 51, 161, 0.5)"
          color="rgba(97, 51, 161, 1)"
          title=" Arte Contemporáneo en el Mundo"
          img="https://imgcdn.larepublica.co/i/768/2019/11/29200612/mambo.jpg"
        />
      </Center>
      <Right>
        <MasonryCard
          id="8"
          filter="rgba(139, 204, 240, .5)"
          color="rgb(139, 204, 240)"
          title="Arte Contemporáneo en Colombia"
          img="https://cr00.epimg.net/radio/imagenes/2018/03/23/cultura/1521827267_280973_1521827331_noticia_normal.jpg"
        />
        <MasonryCard
          id="9"
          color="rgb(15, 15, 15)"
          title="Nuevos Medios"
          img="https://www.abc.com.py/resizer/pmHDUA8m8Fwl-WsM5fnyQ2_A1Nc=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/ISZAU7WCCZF2BBTIAQ4XXYUGIA.jpg"
        />
        <MasonryCard
          id="5"
          color="rgba(23, 51, 28, 1)"
          filter="rgba(23, 51, 28, .5)"
          title="Arte Conceptual en el Mundo"
          img="https://www.revistaarcadia.com/resizer/vHqmtYfWaXShJsr7235EBJScFdA=/arc-anglerfish-arc2-prod-semana/public/RBXZEVRSEFGNZA2BKWJUCNUR3I.jpg"
          always
        />
      </Right>
    </Container>
  );
};
export default Masonry;
