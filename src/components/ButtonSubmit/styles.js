import React from 'react';
import styled from 'styled-components';

import {Link} from "react-router-dom";

export const Button = styled.button `
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
`