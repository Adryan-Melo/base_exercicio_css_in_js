import { Tittleh3 } from './stylesVaga'
import { Vagali } from './stylesVaga'
import { Vagaul } from './stylesVaga'
import { Vagaa } from './stylesVaga'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagali>
    <Tittleh3>{props.titulo}</Tittleh3>
    <Vagaul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </Vagaul>
    <Vagaa href="#">Ver detalhes e candidatar-se</Vagaa>
  </Vagali>
)

export default Vaga
