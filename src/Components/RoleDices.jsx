
import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {


    return(
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`public/images/Dices/dice_${currentDice}.png`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top:48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }

`;