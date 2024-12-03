export const readInput = (regex: RegExp) => {
  const input = Deno.readTextFileSync("./day3/input.txt");
  //prettier-ignore
  const groups = [...input.matchAll(regex)];
  const matches = groups.map((group) => {
    return group[0].startsWith("mul")
      ? [Number.parseInt(group[2]), Number.parseInt(group[3])]
      : group[0];
  });
  return matches;
};
