import { testInput, realInput } from "./input.js";

let [stackInput, procedureInput] = realInput.split("\n\n");
stackInput = stackInput.split("\n").reverse().slice(1);
const stack = [];
for (let i = 1; i < stackInput[0].length; i = i + 4) {
  const temp = [];
  for (let j = 0; j < stackInput.length; j++) {
    const crate = stackInput[j].charAt(i);
    if (crate !== " ") {
      temp.push(crate);
    }
  }
  stack.push(temp);
}
const stack2 = JSON.parse(JSON.stringify(stack));
procedureInput = procedureInput
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const part1 = () => {
  for (const [, quantity, , from, , to] of procedureInput) {
    for (let i = 0; i < quantity; i++) {
      const popped = stack[from - 1].pop();
      if (popped) {
        stack[to - 1].push(popped);
      }
    }
  }
  return stack.reduce((a, b) => a + b.pop(), "");
};
console.log("Part 1: " + part1());

const part2 = () => {
  for (const [, quantity, , from, , to] of procedureInput) {
    const popped = stack2[from - 1].splice(-quantity);
    stack2[to - 1].push(...popped);
  }
  return stack2.reduce((a, b) => a + b.pop(), "");
};
console.log("Part 2: " + part2());
