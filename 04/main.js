import { testInput, realInput } from "./input.js";

const input = realInput
  .split("\n")
  .map((e) => e.split(",").map((e) => e.split("-").map(Number)));
console.log(input);

const part1 = () => {
  let count = 0;
  for (const [first, second] of input) {
    const [firstStart, firstEnd] = first;
    const [secondStart, secondEnd] = second;
    if (
      (firstStart <= secondStart && firstEnd >= secondEnd) ||
      (secondStart <= firstStart && secondEnd >= firstEnd)
    ) {
      count++;
    }
  }
  return count;
};
console.log("Part 1: " + part1());

const part2 = () => {
  let count = 0;
  for (const [first, second] of input) {
    const [firstStart, firstEnd] = first;
    const [secondStart, secondEnd] = second;
    if (
      (firstStart >= secondStart && firstStart <= secondEnd) ||
      (firstEnd >= secondStart && firstEnd <= secondEnd) ||
      (secondStart >= firstStart && secondStart <= firstEnd) ||
      (secondEnd >= firstStart && secondEnd <= firstEnd)
    ) {
      count++;
    }
  }
  return count;
};
console.log("Part 2: " + part2());
