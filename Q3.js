function countDuplicate(input){
let count =[];
input.sort();

for (let i=0; i<input.length; i++){
    if(input[i] === input[i+1]){
        if (count[count.length-1] !== input[i]){
            count.push(input[i])
        }
    }
}
console.log(count.length)
} countDuplicate([1,1,3,3,4,4,4])