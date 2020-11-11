import styled, {css} from 'styled-components'

export const ContainerCard = styled.div`
  background: ${props=>props.color};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 10px 30px;
  position: relative;

   ::after {
    content: '';
    width: 10px;
    height: 10px;
    background: ${props=>props.color};
    border-radius:50%;
    position: absolute;
    right: ${props=>props.pointUbication === 'right' ? '-20px' : 'initial'};
    left: ${props=> props.pointUbication === 'left' ? '-20px': 'initial'};
   }
`
export const ContainerTitleYear = styled.div``
export const Title = styled.p`
  font-size: 0.9em;
  line-height: 17px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`
export const Year = styled.p`
  line-height: 17px;
  font-size: 0.9em;
  color: white;
`
export const ContainerImage = styled.div`
  width: 30px;
  height: 30px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`
