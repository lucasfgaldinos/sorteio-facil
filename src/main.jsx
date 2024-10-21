import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./pages/Home"
import GlobalStyle from "./styles/GlobalStyles"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Home />
		<GlobalStyle />
	</StrictMode>,
)
