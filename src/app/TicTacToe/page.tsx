"use client";
import { useState } from "react";

interface SquareProps {
    value: string|null;
    onSquareClick: ()=> void
  };
  
function Square({value, onSquareClick}: SquareProps) {
    return (
        <button className="border border-black rounded shadow text-black h-[30px] w-[30px]" onClick={onSquareClick}>
        {value}
        </button>
    );
}

function calculateWinner(squares: string[]): string | null {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] !== '.' && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }

    return null;
}

export default function Board() {
    const defaultBoardValue = '.';

    const [xIsNext, setXIsNext] = useState(true);
    const [xMoves, setXMoves] = useState<number[]>([]);
    const [oMoves, setOMoves] = useState<number[]>([]);
    const [squares, setSquares] = useState(Array(9).fill(defaultBoardValue));
    const gameExplanation = "Welcome to a cursed game of Tic Tac Toe, where every 4 moves, your first move disappears, hope you have some fun playing this version";

    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i] !== defaultBoardValue) {
        return;
        }

        const nextSquares = squares.slice();

        // X move
        if (xIsNext) {
        makeMove(xMoves, setXMoves, 'X', i, nextSquares);
        setXIsNext(false);

        // After X move, check if game has been won
        if (!calculateWinner(nextSquares)) {
            // O move using AI logic
            const bestMove = calculateBestMove(nextSquares, 'O');
            if (bestMove !== -1) {
            makeMove(oMoves, setOMoves, 'O', bestMove, nextSquares);
            }
            setXIsNext(true);
        }
        }

        setSquares(nextSquares);
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
        // Strategy: 1) Winning move, 2) Block opponent, 3) Otherwise take the best open space
        for (let i = 0; i < 9; i++) {
        if (board[i] === defaultBoardValue) {
            // Clone the board and simulate placing 'O'
            const tempBoard = board.slice();
            tempBoard[i] = mark;

            if (calculateWinner(tempBoard) === mark) {
            return i; // 'O' wins
            }
        }
        }

        // Block opponent's winning move
        for (let i = 0; i < 9; i++) {
        if (board[i] === defaultBoardValue) {
            const tempBoard = board.slice();
            tempBoard[i] = 'X'; // simulate 'X' move
            if (calculateWinner(tempBoard) === 'X') {
            return i; // Block 'X'
            }
        }
        }

        // If no immediate win or block, take an open corner, center, or side
        const openCorners = [0, 2, 6, 8].filter(i => board[i] === defaultBoardValue);
        if (openCorners.length) {
        return openCorners[Math.floor(Math.random() * openCorners.length)];
        }

        if (board[4] === defaultBoardValue) {
        return 4; // Take center if open
        }

        const openSides = [1, 3, 5, 7].filter(i => board[i] === defaultBoardValue);
        if (openSides.length) {
        return openSides[Math.floor(Math.random() * openSides.length)];
        }

        return -1; // No move available
    }

    function resetBoard() {
        setSquares(Array(9).fill(defaultBoardValue));
        setXMoves([]);
        setOMoves([]);
        setXIsNext(true);
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

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
        <div className="w-full py-10">
            <div className="text-center">
            <div className="status">{status}</div>
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
                <button onClick={resetBoard} className="ml-[20px]">
                Reset
                </button>
            </div>
            </div>
        </div>
        </>
    );
}