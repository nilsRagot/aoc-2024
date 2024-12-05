import { isUpdateWellOrdered } from "./a.ts";
import { readInput } from "./utils.ts";

const canNumberBePlaced = ({
  number,
  orderedUpdate,
  baseUpdate,
  rules,
}: {
  number: number;
  orderedUpdate: number[];
  baseUpdate: number[];
  rules: number[][];
}) => {
  //We find the rules where our number is in the right column <=> supposed to be after some number
  const filteredRules = rules.filter((rule) => rule[1] === number);

  const canBePlaced = filteredRules.every((rule) => {
    return !baseUpdate.includes(rule[0]) || orderedUpdate.includes(rule[0]);
  });
  return canBePlaced;
};

const orderIncorrectUpdate = ({
  update,
  rules,
}: {
  update: number[];
  rules: number[][];
}) => {
  const orderedUpdate: number[] = [];
  let unorderedNumbers = update;
  while (unorderedNumbers.length > 0) {
    let i = 0;
    //We iterate on the numbers to place until we find one that can be placed
    while (
      !canNumberBePlaced({
        number: unorderedNumbers[i],
        baseUpdate: update,
        orderedUpdate,
        rules,
      })
    ) {
      i++;
    }
    // at this point, i contains the index in unorderedNumber of the number that can be placed
    //We add it to the orderedUpdate
    orderedUpdate.push(unorderedNumbers[i]);
    //We remove it from the unorderedNumbers
    unorderedNumbers = [
      ...unorderedNumbers.slice(0, i),
      ...unorderedNumbers.slice(i + 1),
    ];
  }
  return orderedUpdate;
};

export const solve5b = () => {
  const { updates, rules } = readInput();
  const correctedUpdates = updates
    .filter((update) => !isUpdateWellOrdered({ update, rules }))
    .map((incorrectUpdate) =>
      orderIncorrectUpdate({ update: incorrectUpdate, rules })
    );
  return correctedUpdates.reduce((acc, correctedUpdate) => {
    const middleIndex = Math.floor(correctedUpdate.length / 2);
    acc += correctedUpdate[middleIndex];
    return acc;
  }, 0);
};
