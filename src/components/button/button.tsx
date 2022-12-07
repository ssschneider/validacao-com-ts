import { StyledButton } from "./styles"
import { IButton } from "./types"

const Button = ({label, onClick, disabled}: IButton) => {
    return (
        <StyledButton onClick={() => alert("clicou")} disabled={disabled}>{label}</StyledButton>
    )
    
}

export default Button