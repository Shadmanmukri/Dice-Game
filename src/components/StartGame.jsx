import React from 'react'
import styled from "styled-components"
import { Button } from "../styled/Button"

const StartGame = ({toggle}) => {
  return (
    <Container>
    
    <div><img src="/images/dices 1.png"/></div>
    <div className='banner'>
    <h1>DICE GAME</h1>
    <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>

  )
}

export default StartGame

const Container=styled.div`
max-width: 1180px;
display: flex;
align-items: center;
margin: 0 auto;
gap: 50px;
height: 100vh;

.banner{
    display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
}
.banner h1{
    font-size: 80px;
    white-space: nowrap;

}
`



