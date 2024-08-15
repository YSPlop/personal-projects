"use client";
import Image from 'next/image';
import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="border border-black rounded shadow text-black h-[30px] w-[30px]" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function GalleryComponent() {
  return (
    <div className="gallery">
      <div className="gallery-panel">
        <img src="./img1.jpeg" alt="pic1"/>
      </div>
      <div className="gallery-panel">
        <img src="./img2.jpeg" alt="pic2"/>
      </div>
      <div className="gallery-panel">
        <img src="./img3.jpeg" alt="pic3"/>
      </div>
      <div className="gallery-panel">
        <img src="./img4.jpeg" alt="pic4"/>
      </div>
    </div>
  );
}

export default function Board() {

  const defaultBoardValue = '.';

  const [xIsNext, setXIsNext] = useState(true);
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [squares, setSquares] = useState(Array(9).fill(defaultBoardValue));

  function handleClick(i) {
    
    // you can't do the same move twice, or if they won
    if (calculateWinner(squares) || squares[i] !== defaultBoardValue) {
      console.log('squares i is ' + squares[i]);
      return;
    }
    let elementToRemove = null;

    const nextSquares = squares.slice();
    if (xIsNext) {
      let xCopy = xMoves.slice();

      nextSquares[i] = 'X';
      xCopy.push(i);
      if (xCopy.length > 3) {
        elementToRemove = xCopy.shift();
        nextSquares[elementToRemove] = defaultBoardValue;
      }
      setXMoves(xCopy);
    
    } else {

      let oCopy = oMoves.slice();
      nextSquares[i] = 'O';
      oCopy.push(i);
      
      if (oCopy.length > 3) {
        elementToRemove = oCopy.shift();
        nextSquares[elementToRemove] = defaultBoardValue;
      }

      setOMoves(oCopy);

    }
    console.log('xmoves is ' + xMoves);
    console.log('omoves is ' + oMoves);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="w-full py-10">
        <div className="text-center">
          <div className="status">{status}</div>
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
      </div>
      <div>
        <GalleryComponent />
      </div>
    </>
    
  );
}

function calculateWinner(squares) {
  const defaultBoardValue = '.';
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== defaultBoardValue && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
