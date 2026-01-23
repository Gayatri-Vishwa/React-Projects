

import React from "react";
import styled from "styled-components";

function RoleDice({ currentDice, roleDice }) {
  return (
    <DiceContainer>
      <img
        onClick={roleDice}
        src={`/Images/${currentDice}dic.png`}
        alt="dice"
      />
      <p>Click the Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 220px;
    max-width: 100%;
    cursor: pointer;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
