import { Container } from '../Header/styles'
import {ContainerCard, ContainerTitleYear, Title, Year, ContainerImage,ImageCard} from './style'

function CardTimeline(props){
  return (
    <ContainerCard pointUbication={props.ubication} color={props.color}>
      <ContainerTitleYear>
        <Title>Ready-made</Title>
        <Year>1910</Year>
      </ContainerTitleYear>
      <ContainerImage />
    </ContainerCard>
  )
}
export default CardTimeline