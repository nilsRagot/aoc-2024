import { readInput } from "./utils.ts";

export const isSafe = (report: number[]) => {
  let isSafe = true;
  let diffSign = undefined;
  let i = 0;
  while (i < report.length - 1 && isSafe) {
    const difference = report[i + 1] - report[i];
    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
      isSafe = false;
    }
    if (diffSign === undefined) {
      diffSign = difference / Math.abs(difference);
    } else {
      if (diffSign !== difference / Math.abs(difference)) {
        isSafe = false;
      }
    }
    i++;
  }

  return isSafe;
};

export const solve2a = () => {
  const reports = readInput();
  let numberOfSafeReports = 0;
  for (const report of reports) {
    numberOfSafeReports += isSafe(report) ? 1 : 0;
  }
  return numberOfSafeReports;
};

console.log(solve2a());
