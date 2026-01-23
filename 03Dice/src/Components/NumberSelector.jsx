import React from "react";
import styled from "styled-components";

function NumberSelector({ selectedNumber, setSelectedNumber, error, setError }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelect>
      {error && <p className="error">{error}</p>}

      <div className="flex">
        {arrNumber.map((value) => (
          <Box
            key={value}
            $isselected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p className="label">Select Number</p>
    </NumberSelect>
  );
}

export default NumberSelector;

/* ---------------- STYLES ---------------- */

const NumberSelect = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;   /* 👈 desktop look same */
  box-sizing: border-box;

  .flex {
    display: flex;
    gap: 24px;
    margin: 10px 0;
    flex-wrap: nowrap;     /* 👈 DESKTOP SINGLE LINE */
  }

  .label {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 6px;
    text-align: right;
  }

  /* ---------- MOBILE ---------- */
  @media (max-width: 600px) {
    align-items: center;

    .flex {
      flex-wrap: wrap;       /* 👈 MOBILE WRAP */
      justify-content: center;
      gap: 12px;
    }

    .label {
      font-size: 20px;
    }

    .error {
      text-align: center;
    }
  }
`;

const Box = styled.div`
  width: 56px;
  height: 56px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  color: ${({ $isselected }) => ($isselected ? "white" : "black")};
  background-color: ${({ $isselected }) => $isselected ? "black" : "white"};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 400px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }
`;
