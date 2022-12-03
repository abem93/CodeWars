

import { readFileSync } from "node:fs";

const lines = readFileSync("day2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(" "))

// console.log(lines)

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
}
const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors
}

 const solution = {
    A:{ //rock
      X: moves.scissors, //lose
      Y: moves.rock, ///draw
      Z: moves.paper  //win 
    },
    B:{ //paper
      X: moves.rock, //lose
      Y: moves.paper, ///draw
      Z: moves.scissors  //win
    },
    C:{ //scissors
      X: moves.paper, //lose
      Y: moves.scissors, ///draw
      Z:  moves.rock //win
    },
 }

function score(oppMove, ourMove){
  if(oppMove === ourMove){
    return ourMove + 3
  }else if(
    (oppMove === moves.rock && ourMove === moves.paper) ||
    (oppMove === moves.paper && ourMove === moves.scissors) ||
    (oppMove === moves.scissors && ourMove === moves.rock)
    ){
      return ourMove + 6
  }else{
    return ourMove
  }
}


function part1(){
  const outcome = lines.map((line)=> {
    const oppMove = mapInput[line[0]]
    const ourMove = mapInput[line[1]]
    return score(oppMove, ourMove)
  })
  console.log(outcome.reduce((acc, c) => acc + c,0))
}

function part2(){
  const outcome = lines.map((line)=> {
    const oppMove = mapInput[line[0]]
    const ourMove = solution[line[0]][line[1]]
    return score(oppMove, ourMove)
  })
  console.log(outcome.reduce((acc, c) => acc + c,0))
}

part1()
part2()