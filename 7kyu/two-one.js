https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//**************** My Solution ***************//

function longest(s1, s2) {
    let joined = s1 + s2
    joined = joined.split('').sort()
    joined = [...new Set(joined)]
    return joined.join('')
  }