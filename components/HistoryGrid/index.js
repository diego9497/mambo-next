import {GridHistory, ContainerTitle, Title, ContainerImagePrincipal, ImagePrincipal, ContentHistory, TitleContentSecond, TextContentHistory, ContainerButtom, ContentSecond, TextContentSecond, FirstEmpty, SecondEmpty, ContainerFirstImage, ContainerSecondImage, ContainerThirdImage, ImageSecond} from './styles'
import DetailHistory from '../DetailHistory'

function HistoryGrid(props) {
  return(
    <>
    <GridHistory>
      <ContainerTitle>
        <Title color={'blue'}>La historia del MAMBO</Title>
      </ContainerTitle>
      <ContainerImagePrincipal>
        <ImagePrincipal src={'https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg'} />
      </ContainerImagePrincipal>
      <ContentHistory>
        <TextContentHistory>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero magni impedit facere minima dolor illo distinctio maxime aperiam optio, voluptas praesentium laborum explicabo, modi quisquam. Qui ea tempora voluptatum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero magni impedit facere minima dolor illo distinctio maxime aperiam optio, voluptas praesentium laborum explicabo, modi quisquam. Qui ea tempora voluptatum.
        </TextContentHistory>
        <ContainerButtom />
      </ContentHistory>
      <ContentSecond background='blue'>
        <TitleContentSecond color= 'white'>
          Oscar Monsalve
        </TitleContentSecond>
        <TextContentSecond color='white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe corporis eum itaque nesciunt voluptas possimus sequi eveniet et. Modi recusandae dignissimos facilis porro veniam laboriosam voluptates quaerat laudantium beatae pariatur. Saepe corporis eum itaque nesciunt voluptas possimus sequi eveniet et.
        </TextContentSecond>
      </ContentSecond>
      <FirstEmpty />
      <SecondEmpty />
      <ContainerFirstImage>
        <ImageSecond src={'https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg'} />
      </ContainerFirstImage>
      <ContainerSecondImage>
        <ImageSecond src={'https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg'} />
      </ContainerSecondImage>
      <ContainerThirdImage>
        <ImageSecond src={'https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg'} />
      </ContainerThirdImage>
    </GridHistory>
   
    </>
  )
}

export default HistoryGrid