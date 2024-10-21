import { TheLinkButton } from "./styles"

const LinkButton = ({ children, ...props }) => {
	return <TheLinkButton {...props}>{children}</TheLinkButton>
}

export default LinkButton
