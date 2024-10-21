import DiceIcon from "../../assets/imgs/dice_icon.svg"
import Footer from "../../components/Footer"
import LinkButton from "../../components/LinkButton"
import SortearNome from "../../components/SortearNome"
import SortearNumero from "../../components/SortearNumero"
import { Header, Main, Title } from "./styles"

function App() {
	return (
		<>
			<Header>
				<Title>
					<img src={DiceIcon} alt="" />
					sorteio fácil
				</Title>
			</Header>
			<Main>
				<p>sorteie facilmente</p>
				<span>número ou nome</span>

				<LinkButton href="#sortear-numero">sortear número</LinkButton>
				<LinkButton href="#sortear-nome">sortear nome</LinkButton>
			</Main>

			<SortearNumero />
			<SortearNome />

			<Footer />
		</>
	)
}

export default App
