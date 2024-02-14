import styled from 'styled-components';


export const Container = styled.div `
    width: 35%;
    height: 8vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CustomButton = styled.div `
    width: 100%;
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${(props) => (props.color ? props.color : "#076488")};
    font-size: 1.5rem;
    color:#FFFFFF;
    box-shadow: none;
    cursor: pointer;
    padding: 0.4em 1.2em;
    border: 1px solid #d9d9d9;
    margin: 25px;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form `
    width: 35%;
    height: 55vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CustomInput = styled.input `
    background: transparent;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    /* padding: 0 15px; */
    margin: 0 0 20px;
    padding: 1.8rem;
    width: 100%;
    color: #FFFFFF;
    font-size: 1rem;
    &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    }
`

export const CustomSpan = styled.span `
    color: red;
    font-size: 1rem;
`