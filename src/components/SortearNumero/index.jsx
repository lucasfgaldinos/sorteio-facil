import { useRef } from "react"
import CountdownGif from "../../assets/imgs/countdownNumber.gif"
import LinkButton from "../LinkButton"
import { Container, InputBox, RaffleBox, ResultBox } from "./styles"

const SortearNumero = () => {
	const resultBox = useRef()
	const firstInput = useRef()
	const secondInput = useRef()
	const paragraph = useRef()
	const resultParagraph = useRef()
	const checkboxInput = useRef()
	const divLinkButton = useRef()

	const getRandomNumber = (minValue, maxValue) => {
		const min = Math.ceil(minValue)
		const max = Math.floor(maxValue)

		const result = Math.floor(Math.random() * (max - min + 1) + min)

		return result
	}

	const showNumber = () => {
		if (firstInput.current.value <= 0 || secondInput.current.value <= 0) {
			return alert("Insira um número positivo")
		}

		if (firstInput.current.value >= secondInput.current.value) {
			return alert("O número máximo deve ser maior que o número mínimo")
		}

		const result = getRandomNumber(
			firstInput.current.value,
			secondInput.current.value
		)

		resultBox.current.style.display = "flex"
		paragraph.current.innerHTML = `
			o número sorteado entre
			<span>${firstInput.current.value}</span>
			e <span>${secondInput.current.value}</span>
			foi :
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
		<Container id="sortear-numero">
			<RaffleBox>
				<p className="title-rafflebox">sortear número</p>
				<InputBox>
					<label>
						<p>entre</p>
						<input
							ref={firstInput}
							type="number"
							placeholder="1"
							defaultValue={1}
							min={1}
						/>
					</label>

					<label>
						<p>e</p>
						<input
							ref={secondInput}
							type="number"
							placeholder="100"
							defaultValue={100}
							min={2}
						/>
					</label>
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
					<LinkButton onClick={showNumber}>sortear</LinkButton>
				</div>
			</RaffleBox>
		</Container>
	)
}

export default SortearNumero
