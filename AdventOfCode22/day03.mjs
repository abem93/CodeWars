import { readFileSync } from "node:fs";

const lines = readFileSync("day3.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(""))
  

// console.log(lines)

const filtered = [];
const count = lines.reduce((a, letter) => {
  a[letter] = a[letter] + 1 || 1;
  if(a[letter] === 2)
    filtered.push(letter)
  return a;
}, {});

console.log(filtered)

  function part1(){
    //code
  }


  function part2(){
    //code
  }


  part1()
  part2()