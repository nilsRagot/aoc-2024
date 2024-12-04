export const readInput = () => {
  const input = Deno.readTextFileSync("./day4/input.txt");
  const lines = input.split("\n");
  const matrix = [...lines.map((line) => line.split(""))];
  return matrix;
};
