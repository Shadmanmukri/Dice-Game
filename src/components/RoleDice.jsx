import styled from 'styled-components';

const RoleDice = ({rollDice,currentDice}) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="/images/dice/dice_1.png" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
