import styled from "styled-components"

export const InputContainer = styled.div`
    background-color: #f1f1f1;
    color: #0e0e0e;
    border-radius: 8px;
    max-width: 605px;
    height: 50px;
    margin-bottom: 24px;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & input {
        outline: none;
        color: #0e0e0e;
        background-color: #f1f1f1;
        width: 100%;
        height: 100%;
        font-size: 24px;
        padding: 16px;
        inset: none;
        border: 1px solid #0e0e0e;
        border-radius: 8px;
    }

    & p {
        color: #ff0001;
        font-size: 12px;
        margin: 4px 0 24px;
    }
`