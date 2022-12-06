import { testInput, realInput } from "./input.js";

let input = realInput.split("");
const isUnique = (array) => {
  return new Set(array).size === array.length;
};

const part1 = () => {
  for (let i = 0; i < input.length; i++) {
    if (isUnique(input.slice(i, i + 4))) {
      return i + 4;
    }
  }
};
console.log("Part 1: " + part1());

const part2 = () => {
  for (let i = 0; i < input.length; i++) {
    if (isUnique(input.slice(i, i + 14))) {
      return i + 14;
    }
  }
};
console.log("Part 2: " + part2());
