"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./tictactoe.css";
import { gsap } from "gsap"

interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
    winningSquare: boolean;
  }
  
  function Square({ value, onSquareClick, winningSquare }: SquareProps) {
    const squareRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      if (value === "X") {
        const tl = gsap.timeline();
        tl.fromTo(
          squareRef.current,
          { scale: 0, rotation: 180 },
          { scale: 1, rotation: 0, duration: 0.3 }
        ).to(squareRef.current, { scale: 1, duration: 0.3 });
      }
    }, [value]);
  
    return (
      <motion.button
        className={`border border-black rounded shadow text-black h-[60px] w-[60px] flex items-center justify-center transition-all duration-200 ease-in-out ${
          winningSquare ? "bg-yellow-300" : "bg-white"
        }`}
        onClick={onSquareClick}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="text-2xl"
          ref={squareRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: value ? 1 : 0, opacity: value ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {value}
        </motion.span>
      </motion.button>
    );
  }

function calculateWinner(squares: string[]): [string | null, number[] | null] {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] !== "." && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], line]; // return the winner and the winning squares
    }
  }

  return [null, null];
}

export default function Board() {
  const defaultBoardValue = ".";
  const [xIsNext, setXIsNext] = useState(true);
  const [xMoves, setXMoves] = useState<number[]>([]);
  const [oMoves, setOMoves] = useState<number[]>([]);
  const [squares, setSquares] = useState(Array(9).fill(defaultBoardValue));
  const gameExplanation =
    "Welcome to a cursed game of Tic Tac Toe, where every 4 moves, your first move disappears. Hope you have some fun playing this version!";

  function handleClick(i: number) {
    if (calculateWinner(squares)[0] || squares[i] !== defaultBoardValue) {
      return;
    }

    const nextSquares = squares.slice();

    // X move
    if (xIsNext) {
      makeMove(xMoves, setXMoves, "X", i, nextSquares);
      setSquares(nextSquares); // X placed immediately
      setXIsNext(false);

      // Wait for a delay before the AI moves (fixed to delay after X move)
      setTimeout(() => {
        if (!calculateWinner(nextSquares)[0]) {
          // O move using AI logic
          const bestMove = calculateBestMove(nextSquares, "O");
          if (bestMove !== -1) {
            makeMove(oMoves, setOMoves, "O", bestMove, nextSquares);
          }
          setXIsNext(true);
          setSquares(nextSquares); // Update the board after O's move
        }
      }, 1000); // 1000ms delay for the AI move
    }
  }

  function makeMove(moves: number[], setMoves: Function, mark: string, i: number, nextSquares: string[]) {
    let movesCopy = moves.slice();
    nextSquares[i] = mark;
    movesCopy.push(i);
    if (movesCopy.length > 3) {
      const elementToRemove = movesCopy.shift();
      nextSquares[elementToRemove as number] = defaultBoardValue;
    }
    setMoves(movesCopy);
  }

  function calculateBestMove(board: string[], mark: string) {
    for (let i = 0; i < 9; i++) {
      if (board[i] === defaultBoardValue) {
        const tempBoard = board.slice();
        tempBoard[i] = mark;

        if (calculateWinner(tempBoard)[0] === mark) {
          return i;
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      if (board[i] === defaultBoardValue) {
        const tempBoard = board.slice();
        tempBoard[i] = "X";
        if (calculateWinner(tempBoard)[0] === "X") {
          return i;
        }
      }
    }

    const openCorners = [0, 2, 6, 8].filter((i) => board[i] === defaultBoardValue);
    if (openCorners.length) {
      return openCorners[Math.floor(Math.random() * openCorners.length)];
    }

    if (board[4] === defaultBoardValue) {
      return 4;
    }

    const openSides = [1, 3, 5, 7].filter((i) => board[i] === defaultBoardValue);
    if (openSides.length) {
      return openSides[Math.floor(Math.random() * openSides.length)];
    }

    return -1;
  }

  function resetBoard() {
    setSquares(Array(9).fill(defaultBoardValue));
    setXMoves([]);
    setOMoves([]);
    setXIsNext(true);
  }

  const [winner, winningSquares] = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="text-center">
        <h1 className="font-family:jetbrains mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-800 mr-5">Cursed</span>
          TicTacToe.
        </h1>

        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-mono">{gameExplanation}</p>
      </div>
      <div className="w-full py-10">
        <div className="text-center">
          <motion.div className="status mb-4 text-xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {status}
          </motion.div>
          <div className="flex items-center justify-center">
            <div className="board grid grid-cols-3 gap-2">
              {squares.map((value, i) => (
                <Square key={i} value={value} onSquareClick={() => handleClick(i)} winningSquare={winningSquares?.includes(i) ?? false} />
              ))}
            </div>
            <button onClick={resetBoard} className="ml-[20px] button-75 hover:scale-105 transition-transform">
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
