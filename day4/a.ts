import { readInput } from "./utils.ts";
type Direction =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

const cantGo = ({
  direction,
  matrix,
  step,
  i,
  j,
}: {
  direction: Direction;
  matrix: string[][];
  step: number;
  i: number;
  j: number;
}) => {
  const cantGoRight = j + step >= matrix[i].length;
  const cantGoLeft = j - step < 0;
  const cantGoBottom = i + step >= matrix.length;
  const cantGoTop = i - step < 0;
  switch (direction) {
    case "right":
      return cantGoRight;
    case "left":
      return cantGoLeft;
    case "bottom":
      return cantGoBottom;
    case "top":
      return cantGoTop;
    case "bottom-left":
      return cantGoBottom || cantGoLeft;
    case "bottom-right":
      return cantGoBottom || cantGoRight;
    case "top-left":
      return cantGoTop || cantGoLeft;
    case "top-right":
      return cantGoTop || cantGoRight;
  }
};

const getOperations = (
  direction: Direction
): {
  operationOnRows: (position: number, step: number) => number;
  operationOnCols: (position: number, step: number) => number;
} => {
  switch (direction) {
    case "top":
      return {
        operationOnRows: (position: number, step: number) => position - step,
        operationOnCols: (position: number, _step: number) => position,
      };
    case "bottom":
      return {
        operationOnRows: (position: number, step: number) => position + step,
        operationOnCols: (position: number, _step: number) => position,
      };
    case "right":
      return {
        operationOnRows: (position: number, _step: number) => position,
        operationOnCols: (position: number, step: number) => position + step,
      };
    case "left":
      return {
        operationOnRows: (position: number, _step: number) => position,
        operationOnCols: (position: number, step: number) => position - step,
      };
    case "bottom-left":
      return {
        operationOnRows: (position: number, step: number) => position + step,
        operationOnCols: (position: number, step: number) => position - step,
      };
    case "bottom-right":
      return {
        operationOnRows: (position: number, step: number) => position + step,
        operationOnCols: (position: number, step: number) => position + step,
      };
    case "top-left":
      return {
        operationOnRows: (position: number, step: number) => position - step,
        operationOnCols: (position: number, step: number) => position - step,
      };
    case "top-right":
      return {
        operationOnRows: (position: number, step: number) => position - step,
        operationOnCols: (position: number, step: number) => position + step,
      };
  }
};

const verifyMatch = ({
  direction,
  matrix,
  word,
  i,
  j,
}: {
  direction: Direction;
  matrix: string[][];
  i: number;
  j: number;
  word: string;
}) => {
  if (
    cantGo({
      direction,
      matrix,
      i,
      j,
      step: word.length - 1,
    })
  ) {
    return false;
  }
  const { operationOnRows, operationOnCols } = getOperations(direction);
  for (let l = 1; l < word.length; l++) {
    //We iterate over the letters of the word to see if they're all in the matrix

    if (matrix[operationOnRows(i, l)][operationOnCols(j, l)] !== word[l]) {
      //The letter in the matrix is differing from the one in the word
      return false;
    }
  }
  return true;
};

export const solve4a = () => {
  const matrix = readInput();
  const word = "XMAS";
  let totalMatches = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === word[0]) {
        const directions: Direction[] = [
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ];

        const matches = directions
          .map((direction) => verifyMatch({ direction, word, matrix, i, j }))
          .map((match) => (match ? 1 : 0))
          .reduce<number>((acc, number) => {
            acc += number;
            return acc;
          }, 0);
        totalMatches += matches;
      }
    }
  }
  return totalMatches;
};

console.log(solve4a());
