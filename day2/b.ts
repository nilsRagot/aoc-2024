import { isSafe } from "./a.ts";
import { readInput } from "./utils.ts";

export const solve2b = () => {
  const reports = readInput();
  let numberOfSafeReports = 0;
  let numberOfMadeSafeReports = 0;
  for (const report of reports) {
    const isReportSafe = isSafe(report);
    if (isReportSafe) {
      numberOfSafeReports++;
    } else {
      let isMadeSafe = false;
      for (let i = 0; i < report.length; i++) {
        isMadeSafe =
          isMadeSafe || isSafe([...report.slice(0, i), ...report.slice(i + 1)]);
      }
      if (isMadeSafe) {
        numberOfMadeSafeReports++;
      }
    }
  }
  return {
    numberOfSafeReports,
    numberOfMadeSafeReports,
    total: numberOfMadeSafeReports + numberOfSafeReports,
  };
};

// console.log(solve2b());
