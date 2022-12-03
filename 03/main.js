import { testInput, realInput } from "./input.js";

const input = realInput.split("\n").map((e) => {
  return [e.slice(0, e.length / 2), e.slice(e.length / 2)].map((e) =>
    e.split("")
  );
});

const calculatePriority = (char) => {
  const isUpper = char === char.toUpperCase();
  return char.toUpperCase().charCodeAt(0) - (isUpper ? 38 : 64);
};

const part1 = () => {
  let priorities = [];
  for (const [first, second] of input) {
    const sharedItem = first.find((e) => second.includes(e));
    priorities.push(calculatePriority(sharedItem));
  }
  return priorities.reduce((a, b) => a + b, 0);
};
console.log("Part 1: " + part1());

let input2 = realInput.split("\n").map((e) => e.split(""));
const groups = [];

while (input2.length > 0) {
  groups.push(input2.splice(0, 3));
}

const part2 = () => {
  let priorities = [];
  for (const [first, second, third] of groups) {
    const sharedItem = first.find(
      (e) => second.includes(e) && third.includes(e)
    );
    priorities.push(calculatePriority(sharedItem));
  }
  return priorities.reduce((a, b) => a + b, 0);
};
console.log("Part 2: " + part2());
