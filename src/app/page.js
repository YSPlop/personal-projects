"use client";
import { setLazyProp } from 'next/dist/server/api-utils';
import { Hammersmith_One } from 'next/font/google';
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

function Board() {

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

    const nextSquares = squares.slice();

    function handleMove(moves, setMoves, mark) {
      let movesCopy = moves.slice();
      nextSquares[i] = mark;
      movesCopy.push(i);
      if (movesCopy.length > 3) {
        const elementToRemove = movesCopy.shift();
        nextSquares[elementToRemove] = defaultBoardValue;
      }
      setMoves(movesCopy);
    }
    
    if (xIsNext) {
      handleMove(xMoves, setXMoves, 'X');
    } else {
      handleMove(oMoves, setOMoves, 'O');
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  
  }

  function resetBoard() {
    setSquares(Array(9).fill(defaultBoardValue));
    setXMoves([]);
    setOMoves([]);
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
          <div className="status ">{status}</div>
          <div className="flex items-center justify-center">
            <div className="board">
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
            <button onClick={resetBoard} class="ml-[20px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Reset
              </span>
            </button>
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

export default function Home() {

  const gameExplanation = "Welcome to a cursed game of Tic Tac Toe, where every 4 moves, your first move disappears, hope you have some fun playing this version";

  return (
    <>
      <div className="text-center">
        <h1 className="font-family:jetbrains mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-800 mr-5">
            Cursed
          </span>
          TicTacToe.
        </h1>
        
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-mono">
          {gameExplanation}
        </p>
      </div>
      <Board />
    </>
  );

}