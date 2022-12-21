import styled from "styled-components";


export const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;


interface ButtonProps {
primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
background: ${props => props.primary ? "blue" : "white"};
color: ${props => props.primary ? "white" : "blue"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid blue;
border-radius: 3px;
cursor: pointer;
`
