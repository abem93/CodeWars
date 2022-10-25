https://www.codewars.com/kata/5413759479ba273f8100003d/javascript

// DESCRIPTION:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//******************** My Solution ********************//


function reverse(array) {
    let array_reversed = new Array
    for (let i = array.length-1 ; i >= 0 ; i--){
      array_reversed.push(array[i])
     }
   return array_reversed
  }