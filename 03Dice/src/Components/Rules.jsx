


import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to Play</h2>
      <p>Select a number</p>
      <p>Click on dice</p>
      <p>If number matches → same points added</p>
      <p>Wrong guess → 1 point deducted</p>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  background: #fbf1f1;
  padding: 16px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 4px 0;
  }
`;
