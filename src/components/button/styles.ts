import styled from "styled-components"

export const StyledButton = styled.button`
    background-color: #0e0e0e;
    color: #f1f1f1;
    font-size: 24px;
    padding: 8px 16px;
    width: 100%;
    border-radius: 8px;
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        letter-spacing: 2px;
    }

    &:disabled {
        cursor: not-allowed;
        color: #545454;
    }
`