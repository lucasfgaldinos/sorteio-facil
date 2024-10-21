import WhatsappIcon from "../../assets/imgs/whatsapp_icon.svg"
import { TheFooter } from "./styles"

const Footer = () => {
	return (
		<TheFooter>
			<div className="contacts">
				<p>quer um website personalizado para fazer seus próprios sorteios?</p>
				<span>entre em contato :</span>

				<a
					className="whatsapp-link"
					target="_blank"
					href="https://wa.me/5516981272448"
					rel="noreferrer"
				>
					<img src={WhatsappIcon} alt="Ícone do Whatsapp" />
				</a>
			</div>

			<div className="final">
				<hr />

				<p>
					desenvolvido por
					<a
						target="_blank"
						href="https://github.com/lucasfgaldinos"
						rel="noreferrer"
					>
						Lucas Galdino
					</a>
				</p>
			</div>
		</TheFooter>
	)
}

export default Footer
