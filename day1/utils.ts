export const readInput = () => {
  const data = Deno.readTextFileSync("./day1/input.txt");
  const lines = data.split("\n");
  const list1: number[] = [];
  const list2: number[] = [];
  for (const line of lines) {
    const [number1, number2] = line.split("   ");
    list1.push(Number.parseInt(number1));
    list2.push(Number.parseInt(number2));
  }
  return [list1, list2];
};
