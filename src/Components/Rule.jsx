import styled from "styled-components";

const Rule = () => {
    return(
        <RuleContainer>
            <h2>Select any number</h2>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
                after click on dice if selected number is equal to dice number you get same point as dice {""}
            </p>
        </RuleContainer>
    )
}

export default Rule;


const RuleContainer = styled.div`

    max-width: 800px;
    margin-top: 40px;
    background-color: white;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;
    }

    .text {
        margin-top: 24px;
    }
`;