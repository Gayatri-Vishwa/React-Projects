import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../Styled/Buttons";
import Rules from "./Rules";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [visibleRules, setVisibleRules] = useState(false);

  const generateRandomNo = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNo(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((p) => p + randomNumber);
      toast.success(`Correct! +${randomNumber}`);
    } else {
      setScore((p) => p - 1);
      toast.error("Wrong! -1");
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <ToastContainer position="top-center" autoClose={2500} />

      <div className="app-box">
        <div className="top">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>

        <RoleDice currentDice={currentDice} roleDice={roleDice} />

        <div className="btns">
          <OutlineButton onClick={() => setScore(0)}>
            Reset Score
          </OutlineButton>
          <Button onClick={() => setVisibleRules((p) => !p)}>
            {visibleRules ? "Hide" : "Show"} Rules
          </Button>
        </div>

        {visibleRules && <Rules />}
      </div>
    </MainContainer>
  );
}

export default GamePlay;



const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .app-box {
    width: 100%;
    max-width: 1100px;   /* 👈 DESKTOP FULL LOOK */
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-top: 40px;
  }

  .btns {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  /* ----------- MOBILE ----------- */
  @media (max-width: 600px) {
    padding: 10px;

    .app-box {
      max-width: 420px;  /* 👈 mobile centered card */
    }

    .top {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .btns button {
      width: 100%;
    }
  }
`;
