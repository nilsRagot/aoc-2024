import { verifyMatch } from "./a.ts";
import { readInput } from "./utils.ts";

export const solve4b = () => {
  const matrix = readInput();
  let totalMatches = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "A") {
        const regularDiagonalMatch =
          (verifyMatch({
            direction: "top-left",
            word: "AM",
            i,
            j,
            matrix,
          }) &&
            verifyMatch({
              direction: "bottom-right",
              word: "AS",
              i,
              j,
              matrix,
            })) ||
          (verifyMatch({
            direction: "top-left",
            word: "AS",
            i,
            j,
            matrix,
          }) &&
            verifyMatch({
              direction: "bottom-right",
              word: "AM",
              i,
              j,
              matrix,
            }));
        const reversedDiagonalMatch =
          (verifyMatch({
            direction: "top-right",
            word: "AM",
            i,
            j,
            matrix,
          }) &&
            verifyMatch({
              direction: "bottom-left",
              word: "AS",
              i,
              j,
              matrix,
            })) ||
          (verifyMatch({
            direction: "top-right",
            word: "AS",
            i,
            j,
            matrix,
          }) &&
            verifyMatch({
              direction: "bottom-left",
              word: "AM",
              i,
              j,
              matrix,
            }));
        if (regularDiagonalMatch && reversedDiagonalMatch) {
          totalMatches++;
          // console.log("match", { i: i + 1, j: j + 1 });
        }
      }
    }
  }
  return totalMatches;
};

// console.log(solve4b());
