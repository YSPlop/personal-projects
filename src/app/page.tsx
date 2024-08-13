"use client";
import { useState } from "react";

// Define the type of props using an interface for Square

// function Square() {

//   const [value, setValue] = useState<string | null>(null);
  
//   function handleClick() {
//     setValue('X');
//     console.log('hi');
//   }

//   return (
//     <button
//       className="square"
//       onClick={handleClick}
//     >
//       {value}
//     </button>
//   );

// }

// Define the type of props using an interface
interface SquareProps {
  value: string | null; // Value can be a string or null
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return ( 
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


export default function Board() {
  
  const [xIsNext, setXIsNext] = useState(true)
  const [xCounter, setXCounter] = useState(0);
  const [yCounter, setYCounter] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill('.'));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i:number) {
    const nextSquares = squares.slice();
    
    if (!(squares[i] === '.')) {
      return; 
    }
    
    if (xIsNext) {
      nextSquares[i] = 'X';
      setXCounter(xCounter + 1);
    } else {
      nextSquares[i] = 'O';
      setYCounter(yCounter + 1);
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function calculateWinner(squares:string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}