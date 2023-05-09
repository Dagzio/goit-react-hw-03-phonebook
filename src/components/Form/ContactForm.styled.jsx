import { Form ,Field } from "formik";
import styled from "styled-components";


export const CurrentForm = styled(Form)`
display: flex;
flex-direction:column;
margin-bottom: 20px;
padding: 12px 8px;
width: 320px;
border: 1px solid black;
background-color: #e4e4e4;
`;

export const Input = styled(Field)`
width: 180px;
margin-bottom: 20px;
`;

export const Button = styled.button`
width 112px;
border-radius: 6px;
padding: 4px 12px;
cursor: pointer;
border: transparent;
outline: 1px solid black;
&:active{
    background-color: grey;
}
`;

export const Label = styled.label`
font-size: 20px;
font-weight: 500;
`;
