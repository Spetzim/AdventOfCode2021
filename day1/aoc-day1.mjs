import { readFileSync } from "fs";
const lines = readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));



let increased = 0;
for (let i = 3; i < lines.length; i++) {
    let currentNumber = lines[i] + lines[i - 1] + lines[i - 2];
    let previousNumber = lines[i - 1] + lines[i - 2] + lines[i - 3];
    if (currentNumber > previousNumber) {
        increased++
    }
}
console.log(increased)


