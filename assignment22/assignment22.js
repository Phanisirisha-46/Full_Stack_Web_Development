let str = "aaaabbababababbbbabababaaaa";
let c = 0;
let c1 = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        c++;
    } else if (str[i] === 'b') {
        c1++;
    }
}
console.log("no of a: ", c);
console.log("no of b: ", c1);

let person = prompt("Please enter your statement");
const array = person.split(" ");
console.log("Number of words: ", array.length);
