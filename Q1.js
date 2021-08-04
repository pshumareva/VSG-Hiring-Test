function lastLetters(input){
let word = input;
let firstL = word.charAt(word.length-1);
let secondL = word.charAt(word.length-2);
console.log(`${firstL} ${secondL}`)
} lastLetters('apple');