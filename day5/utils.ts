export const readInput = () => {
  const input = Deno.readTextFileSync("./day5/input.txt");
  const blocs = input.split("\n\n");
  const rules = blocs[0]
    .split("\n")
    .map((rule) => rule.split("|").map((number) => Number.parseInt(number)));

  const updates = blocs[1]
    .split("\n")
    .map((update) =>
      update.split(",").map((number) => Number.parseInt(number))
    );

  return { updates, rules };
};
