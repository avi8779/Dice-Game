import StartGame from "./Components/StartGame";
import './App.css'
import { useState } from "react";
import Gameplay from "./Components/Gameplay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const toggleGameplay = () =>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <Gameplay /> : <StartGame toggle = {
          toggleGameplay}/>
      }
    </>
  )
}

export default App
