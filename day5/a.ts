import { readInput } from "./utils.ts";

export const isUpdateWellOrdered = ({
  update,
  rules,
}: {
  update: number[];
  rules: number[][];
}) => {
  // console.log(update);
  for (let i = 0; i < update.length; i++) {
    const number = update[i];
    // A number is well positioned in the update if :
    // there are no number supposed to be before it OR if there are, they are before it in the update
    // We check the right column to verify that.
    const filteredRules = rules.filter(
      //Only the rules containing the number on the right column
      (rule) => rule[1] === number
    );
    for (const filteredRule of filteredRules) {
      // Let's suppose rule A | number
      // If A is in the update and is not placed before number, that means that number is breaking the rule A | number,
      // therefore the update is invalid
      if (
        update.includes(filteredRule[0]) &&
        !update.slice(0, i).includes(filteredRule[0])
      ) {
        // console.log("breaking", {
        //   number,
        //   filteredRule,
        // });
        return false;
      }
    }
  }
  // console.log("✅");
  return true;
};
export const solve5a = () => {
  const { updates, rules } = readInput();
  const correctUpdates = updates.filter((update) =>
    isUpdateWellOrdered({ update, rules })
  );
  return correctUpdates.reduce((acc, correctUpdate) => {
    const middleIndex = Math.floor(correctUpdate.length / 2);
    acc += correctUpdate[middleIndex];
    return acc;
  }, 0);
};
