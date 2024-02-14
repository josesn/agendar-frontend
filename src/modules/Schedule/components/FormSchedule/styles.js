import styled from 'styled-components';

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

export const Select = styled.select `
    background: transparent;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    padding: 0 15px;
    color: #FFFFFF;
    margin: 0 0 10px;
    padding: 1.2rem;
    width: 100%;
    font-size: 1.1rem;
   
`

export const Option = styled.option `
    background: transparent;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    padding: 0 15px;
    color: #FFFFFF;
    margin: 0 0 10px;
    padding: 1.4rem;
    width: 40%;
    font-size: 0.5rem;
    
`