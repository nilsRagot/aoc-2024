import { readInput } from "./utils.ts";

export const solve3a = () => {
  const input = readInput(/(mul\((\d+),(\d+)\))/gm) as [[number, number]];
  return input.reduce((acc, value) => {
    acc += value[0] * value[1];
    return acc;
  }, 0);
};

console.log(solve3a());
