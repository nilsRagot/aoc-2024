import { readInput } from "./utils.ts";

export const solve3b = () => {
  const input = readInput(/(mul\((\d+),(\d+)\))|(do\(\)|don't\(\))/gm) as [
    "don't()" | "do()" | [number, number]
  ];
  let sum = 0;
  let instruction: "don't()" | "do()" = "do()";
  for (const match of input) {
    if (typeof match === "string") {
      instruction = match;
    } else {
      if (instruction === "do()") {
        sum += match[0] * match[1];
      }
    }
  }
  return sum;
};

console.log(solve3b());
