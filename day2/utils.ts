export const readInput = () => {
  const input = Deno.readTextFileSync("./day2/input.txt");
  const lines = input.split("\n");
  const reports = lines.map((line) =>
    line.split(" ").map((value) => Number.parseInt(value))
  );
  return reports;
};
