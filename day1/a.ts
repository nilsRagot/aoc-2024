import { readInput } from "./utils.ts";

export const resolvePuzzle1a = () => {
  const [list1, list2] = readInput();
  const sortedList1 = list1.sort();
  const sortedList2 = list2.sort();
  let sum: number = 0;
  for (let i = 0; i < Math.min(sortedList1.length, sortedList2.length); i++) {
    sum += Math.abs(sortedList1[i] - sortedList2[i]);
  }
  return sum;
};

console.log(resolvePuzzle1a());
