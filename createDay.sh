mkdir "day$1"
touch "day$1/input.txt"
touch "day$1/a.ts"
touch "day$1/b.ts"
touch "day$1/utils.ts"
echo "export const readInput = () => {\n  const input = Deno.readTextFileSync('./day$1/input.txt')\n}" > "day$1/utils.ts"
echo "import { readInput } from './utils.ts'\n\nexport const solve$1a = () => {}" > "day$1/a.ts"
echo "import { readInput } from './utils.ts'\n\nexport const solve$1b = () => {}" > "day$1/b.ts"