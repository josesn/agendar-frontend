import styled from 'styled-components';

import {Link} from "react-router-dom";


export const HeaderContainer = styled.header `
    width: 100%;
    height: 6vh;
    top: 0;
    z-index: 9999;
    display: flex;
    background-color: #d8e8e9;
    border-color: 2px solid #0B4820;
    justify-content: space-around;
    align-items: center;
    position: fixed;
`

export const TitleContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderSpan = styled.span `
    text-decoration: none;
    color: #000000;
    padding-inline: 0.5rem;
    font-size: 1.4rem;
`

export const HeaderLink = styled(Link) `
    text-decoration: none;
    color: #000000;
    padding-inline: 1.5rem;
    font-size: 1.4rem;
`

export const HeaderNav = styled.nav `

`