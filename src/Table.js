import React, { useState } from 'react'
import Square from './Square'

  const Table = () => {
    const [val, setVal] = useState(Array(9).fill(null));
    const [state, setState] = useState(true);
  
    const checkWinner = () => {
      const winnerLogic = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let logic of winnerLogic) {
        const [a, b, c] = logic;
        if (val[a] !== null && val[a] === val[b] && val[a] === val[c]) {
          return val[a];
        }
      }
  
      return false;
    };
  
    const isWinner = checkWinner();
    function isBoardFull() {
      for (let i = 0; i < val.length; i++) {
        if (val[i] === null) {
          return false;
        }
      }
      return true;
    }
    
  
    const handleClick = (index) => {
      if (val[index] !== null) {
        return;
      }
      const copyState = [...val];
      copyState[index] = state ? "X" : "O";
      setVal(copyState);
      setState(!state);
    };
  
    const handleReset = () => {
      setVal(Array(9).fill(null));
    };
  
    return (
      <div style={{ margin: '50px' }}>
        {isWinner ? (
          <>
            {isWinner} won the game <button onClick={handleReset}>Play Again</button>
          </>
        ) : (
          <>
            {isBoardFull() ? (
              <>
                It's a draw! <button onClick={handleReset}>Play Again</button>
              </>
            ) : (
              <>
      <h1>Tic Tac Toe Game</h1>
                <div style={{ display: 'flex' }}>
                  <Square onClick={() => handleClick(0)} value={val[0]} />
                  <Square onClick={() => handleClick(1)} value={val[1]} />
                  <Square onClick={() => handleClick(2)} value={val[2]} />
                </div>
                <div style={{ display: 'flex' }}>
                  <Square onClick={() => handleClick(3)} value={val[3]} />
                  <Square onClick={() => handleClick(4)} value={val[4]} />
                  <Square onClick={() => handleClick(5)} value={val[5]} />
                </div>
                <div style={{ display: 'flex' }}>
                  <Square onClick={() => handleClick(6)} value={val[6]} />
                  <Square onClick={() => handleClick(7)} value={val[7]} />
                  <Square onClick={() => handleClick(8)} value={val[8]} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
    
      }  
export default Table