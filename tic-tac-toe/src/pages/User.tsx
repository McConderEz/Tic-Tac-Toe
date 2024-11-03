import { useState } from "react";
import { Square } from "./Square";

type User = {
    id: string;
    username: string;
    age: number;
    role: {
        id: string;
        name: string;
    };
};

export default function Board() {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
    const [squaresHistory, setSquaresHistory] = useState<Array<Array<string>>>(
        []
    );
    const winner = calculateWinner(squares);

    let status: string = "";
    if (winner) {
        status = "Winner:" + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "0");
    }

    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            console.log("you are win");
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "0";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        setSquaresHistory([...squaresHistory, squares]);
    }

    function calculateWinner(squares: string[]) {
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
            if (squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className="status text-white">{status}</div>
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
        </>
    );
}
