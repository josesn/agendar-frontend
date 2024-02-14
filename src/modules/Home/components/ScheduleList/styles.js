import React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components"


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div `
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius:
`;

export const Spinner = styled.div`
	margin: 16px;
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 80px;
	height: 80px;
	border-radius: 50%;
`;