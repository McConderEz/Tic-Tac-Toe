import { Props } from "./Game";


export function Square({ value, onSquareClick }: Props) {
    console.log("render");
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }