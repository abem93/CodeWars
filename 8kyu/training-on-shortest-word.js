//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//*********** My Solution ************//

function findShort(s){
    s = s.split(' ').sort((a,b)=> a.length - b.length)
    return s[0].length
  }