import React from 'react'
import styled from "styled-components"
import  {useState} from 'react'

const Rules = ({showRules, setShowRules, toggleRules}) => {
  return (
    <RulesContainer>
        <h2>How to play Dice game</h2>
        <p className='text'>Select any number</p>
        <p>Click on dice game</p>
        <p>after click on dice if selected number is equal to dice number you will get some point as dice {""}</p>
        <p>if you get wrong guess then 2 points will be deducted</p>
    </RulesContainer>
    
  )
}

export default Rules

const RulesContainer=styled.div`
background-color:  #FF474C;
padding: 25px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 500px;
margin: 40px auto 40px auto;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top: 24px;
}
p{
    line-height: 30px;
    font-weight: 500;
}
`