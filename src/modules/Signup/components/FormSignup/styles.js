import React from 'react';
import styled from 'styled-components';

import {Link} from "react-router-dom";

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