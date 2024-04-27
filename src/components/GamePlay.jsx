import React, { useState } from 'react';
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RoleDice from './RoleDice'
import { Button } from "../styled/Button"
import { OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score,setScore]= useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError]=useState("")
  const [showRules, setShowRules]=useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Fix the random number generation
  };

  const rollDice = () => {
    if (!selectedNumber){
      setError("You have not selected number")
      return;

    }
    const randomNumber = generateRandomNumber(1, 6); 
    setCurrentDice(randomNumber) ;
    if (!selectedNumber) return;
    if(selectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber)
    }else {
      if(score>0){
      setScore((prev)=> prev - 2 )
      }
      
    }
  };

  const resetScore=()=>{
    setScore(0)
    setSelectedNumber(!selectedNumber)


  }

  const toggleRules=()=>{

    setShowRules((prev)=> !prev)


  }


  return (
    <MainContainer>
    <div className='top_section '>
    <TotalScore score={score} />
    <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice rollDice={rollDice} setCurrentDice={setCurrentDice} currentDice={currentDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={toggleRules}> {showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
height:calc(100vh - 2000px) ;
.top_section{
  display: flex;
  align-items: end;
  justify-content: space-around;
}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}
`