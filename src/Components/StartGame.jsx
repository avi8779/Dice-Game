import styled from "styled-components";
import { Button } from "../Styled/Button";


const StartGame = ({toggle}) => {
    return (
        <Container>
            <div className="image">
                <img src="./images/dices.png" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button
                onClick={toggle}>play Now</Button>
            </div>
        </Container>
    )
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .images{
        img{
            width: 649px;
            height: 522px;

        }
    }

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

