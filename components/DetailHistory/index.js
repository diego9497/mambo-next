import DidYouKnow from "../Icons/DidYouKnow";
import Activities from "../Icons/Activities";
import Questions from "../Icons/Questions";
import KeyConcepts from "../Icons/KeyConcepts";
import {
  ContainerDetail,
  ContainerTitle,
  Title,
  ContainerContentSecond,
  TextContent,
  ImageBackground,
  ContainerMenu,
  ItemMenu,
  TextItem,
  ContainerContent,
} from "./styles";

function DetailHistory({ exhibition, config }) {
  const { color, forWhat, forWhatContent } = exhibition;
  return (
    <ContainerDetail>
      <ContainerTitle>
        <Title color={color}>{forWhat}</Title>
      </ContainerTitle>
      <ContainerContent>
        <TextContent>{forWhatContent}</TextContent>
      </ContainerContent>
      <ContainerContentSecond>
        <TextContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          corporis harum maxime veniam, odit doloribus neque ea error suscipit
          dolorum iure, in laborum voluptate quia alias! Maiores ipsum dolore
          maxime?
        </TextContent>
      </ContainerContentSecond>
      <ContainerMenu>
        <ItemMenu>
          <DidYouKnow />
          <TextItem>{config.didYouKnow}</TextItem>
        </ItemMenu>
        <ItemMenu>
          <Activities />
          <TextItem>{config.activity}</TextItem>
        </ItemMenu>
        <ItemMenu>
          <Questions />
          <TextItem>{config.questions}</TextItem>
        </ItemMenu>
        <ItemMenu>
          <KeyConcepts />
          <TextItem>{config.keyConcepts}</TextItem>
        </ItemMenu>
      </ContainerMenu>
      <ImageBackground src="https://ivital.mx/wp-content/uploads/2020/02/James-Turrell_Foto-Florian-Holzerr_Museo-Jumex-4.jpg" />
    </ContainerDetail>
  );
}
export default DetailHistory;
