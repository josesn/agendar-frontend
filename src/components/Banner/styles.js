import styled from 'styled-components';

export const BannerContainer = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    flex-direction: column;
    width: 80%;
    height: 70vh;
    opacity: 0.4;
    border-radius: 10px;
    padding: 15px;

`

export const BannerDescription = styled.span `
    font-size: 2.5rem;
    font-weight: 600;
    color: black;
`

export const BannerButton = styled.button `
    width: 40%;
    padding-block: 15px;
    margin-block: 20px;
    font-size: 1.2rem;
    font-weight: 600;
`
