import {ContainerDetail, ContainerTitle, Title, ContainerContentSecond,TextContent, ImageBackground, ContainerMenu, ItemMenu, ContainerIcon, TextItem, ContainerContent} from './styles'

function DetailHistory(props){
  return(
    <ContainerDetail>
      <ContainerTitle>
        <Title color='blue'>¿Un museo para qué?</Title>
      </ContainerTitle>
      <ContainerContent>
        <TextContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque fugit quis fuga aut mollitia deleniti officiis repellat velit id sint, dignissimos neque tempore non earum cumque numquam vitae provident! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium minus maxime amet. Placeat atque iure odit dicta deserunt. Porro, placeat illo blanditiis beatae quia vero iure magni? Numquam, at sequi.
        </TextContent>
      </ContainerContent>
      <ContainerContentSecond>
        <TextContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis harum maxime veniam, odit doloribus neque ea error suscipit dolorum iure, in laborum voluptate quia alias! Maiores ipsum dolore maxime?
        </TextContent>
      </ContainerContentSecond>
      <ContainerMenu>
        <ItemMenu>
          <ContainerIcon />
          <TextItem>Sabias qué</TextItem>
        </ItemMenu>
        <ItemMenu>
          <ContainerIcon />
          <TextItem>Actividad</TextItem>
        </ItemMenu>
        <ItemMenu>
          <ContainerIcon />
          <TextItem>Preguntas</TextItem>
        </ItemMenu>
        <ItemMenu>
          <ContainerIcon />
          <TextItem>Conceptos claves</TextItem>
        </ItemMenu>
      </ContainerMenu>
      <ImageBackground  src='https://ivital.mx/wp-content/uploads/2020/02/James-Turrell_Foto-Florian-Holzerr_Museo-Jumex-4.jpg'/>
    </ContainerDetail>

  )
}
export default DetailHistory