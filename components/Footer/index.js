import {ContainerFooter, ItemOption,ContainerIcon, Option, A} from './styles'
import Link from 'next/link'
function Footer(props){
  return(
    <ContainerFooter>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon>
            </ContainerIcon>
            <Option>Mambo pop up</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon>
            </ContainerIcon>
            <Option>NUEVOS MEDIOS</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon>
            </ContainerIcon>
            <Option>ACTVIDADES</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon>
            </ContainerIcon>
            <Option>LINEA DE TIEMPO</Option>
          </ItemOption>
        </A>
      </Link>
      <Link href="">
        <A>
          <ItemOption>
            <ContainerIcon>
            </ContainerIcon>
            <Option>MAPA</Option>
          </ItemOption>
        </A>
      </Link>

    </ContainerFooter>
  )
}

export default Footer