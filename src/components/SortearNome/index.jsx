import { useRef } from "react"
import CountdownGif from "../../assets/imgs/countdownName.gif"
import LinkButton from "../LinkButton"
import { Container, InputBox, RaffleBox, ResultBox } from "./styles"

const SortearNome = () => {
	const resultBox = useRef()
	const textArea = useRef()
	const paragraph = useRef()
	const resultParagraph = useRef()
	const checkboxInput = useRef()
	const divLinkButton = useRef()

	const getNames = () => {
		const textAreaValue = textArea.current.value.toLowerCase()

		const names = textAreaValue.split(",")

		return names
	}

	const getRandomNumber = (minValue, maxValue) => {
		const min = Math.ceil(minValue)
		const max = Math.floor(maxValue)

		const result = Math.floor(Math.random() * (max - min + 1) + min)

		return result
	}

	const showName = () => {
		const namesArray = getNames()

		const numberRandom = getRandomNumber(0, namesArray.length - 1)

		const result = namesArray[numberRandom]

		resultBox.current.style.display = "flex"
		paragraph.current.innerHTML = `
			o nome sorteado foi :
		`

		if (checkboxInput.current.checked === true) {
			divLinkButton.current.style.display = "none"
			resultParagraph.current.innerHTML = `
				<img width="150" src=${CountdownGif} />
			`

			setTimeout(() => {
				resultParagraph.current.innerHTML = result
				divLinkButton.current.style.display = "flex"
			}, 13700)
		} else {
			resultParagraph.current.innerHTML = result
		}
	}

	return (
		<Container id="sortear-nome">
			<RaffleBox>
				<p className="title-rafflebox">sortear nome</p>
				<InputBox>
					<textarea
						spellCheck={false}
						ref={textArea}
						placeholder="Digite os nomes que deseja sortear, separados por vírgula. (exemplo: Lucas Galdino, Adriana, Maria da Silva, Cristiano Ronaldo, Leandro, ..."
					/>
				</InputBox>

				<ResultBox ref={resultBox}>
					<p ref={paragraph} />

					<p ref={resultParagraph} className="result-paragraph" />
				</ResultBox>

				<div className="checkbox-div">
					<p>exibir contagem regressiva?</p>
					<input ref={checkboxInput} type="checkbox" id="checkbox-input" />
				</div>

				<div ref={divLinkButton} className="div-link-button">
					<LinkButton onClick={showName}>sortear</LinkButton>
				</div>
			</RaffleBox>
		</Container>
	)
}

export default SortearNome
