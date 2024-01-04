import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDices";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rule from "./Rule";


function Gameplay(){
    const [score,setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRule, setShlowRule] = useState(false)


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    };

    const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        
        const randomNumber =generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }else{
            setScore((prev) => prev -2);
        }

        setSelectedNumber(undefined)
    };

    const resetScore = () => {
        setScore(0)
    }

    return(
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector 
                    error={error} 
                    setError ={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber} 
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Rest</OutlineButton>
                <Button 
                onClick={() => setShlowRule((prev) => !prev)}
                >{showRule ? "Hide" : "Show"}</Button>
            </div>
           {showRule && <Rule />}
        </MainContainer>
    )
}

export default Gameplay;

const MainContainer = styled.main`
    padding-top: 70px;
    
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns {
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;