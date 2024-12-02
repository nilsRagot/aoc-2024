import { readInput } from "./utils.ts";

export const resolvePuzzle1b = () => {
  const [list1, list2] = readInput();
  let similarityScore = 0;
  for (const number1 of list1) {
    let numberOfOccurrences = 0;
    for (const number2 of list2) {
      if (number1 === number2) {
        numberOfOccurrences += 1;
      }
    }
    similarityScore += numberOfOccurrences * number1;
  }
  return similarityScore;
};

console.log(resolvePuzzle1b());
