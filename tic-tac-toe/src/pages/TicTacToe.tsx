import { Button } from "@mui/material";

export type Props = {
  value: string;
  onSquareClick: () => void;
};

export default function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
  }


