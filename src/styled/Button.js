import styled from "styled-components"

export const Button=styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
border: none;
min-width: 220px;
font-size: 17px;
border: 1px solid transparent;
transition: 0.5s ;
cursor: pointer;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s ;
}
`

export const OutlineButton=styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
color: black;
padding: 10px 18px;
background-color: white;
border-radius: 5px;
border: none;
min-width: 220px;
font-size: 17px;
border: 1px solid transparent;
transition: 0.5s ;
outline: 1px solid black;
cursor: pointer;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.4s ;
}
`