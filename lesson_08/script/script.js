// alert("My first line in JS");
/*console.log("My second line in JS");

// the old method
var messange = "Hello friends";

let messange_1 = "Hello friends";

const messange_2 = "Hello friends";

messange_1 = "new text"

console.log(messange);
console.log(messange_1);
console.log(messange_2);

const number_1 = 5;
const number_2 = 15;

if(number_1 > number_2) {
    console.log(number_1);
} else if(number_1 < number_2) {
    console.log(number_2);
} else {
    console.log("They are equal");
}

const number = 25;
if(number % 2 == 0) {
    console.log("The number is event");
} else {
    console.log("The number is not event");
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 9; i > 0; i--) {
    console.log(i);
}*/

// const list = [12, 4, 65, 3, 5];
// list.push(4);

// console.log(list);
// console.log(list[1]);
// console.log(list.length);

/*for (let i = 0; i < list.length; i++) {
    if(list[i] % 2 === 0){
        console.log(list[i]);
    }    
}

let res = 0;
for (let i = 0; i < list.length; i++) {
    if(list[i] % 2 === 0){
       res += list[i];
    }        
}
console.log(res);*/
 
const words = ['bikeu', 'boatkl', 'car', 'Markhhhhhh'];
/*for(let i = 0; i < words.length; i++) {
    console.log(words[i]);
}*/

for(word of words){
    if(word.length > 7)
    console.log(word);
}


for(let i = 0; i < words.length; i++) {
    if(words[i].length > 7){
        console.log(words[i]);   
    }   
}
for(word of words){
    if(word.length > 7)
    console.log(word);
}

const list = [12, 4, 65, 3, 5];
let max = 0;
for (let i = 0; i < list.length; i++) {
    if(list[i] > max){
        max = list[i];
       
    }    
}

console.log(max);

let res = words[0];
for(word of words){
    if(word.length > res.length)
    res = word;
}
console.log(res);

let value_1;
if(true) {
    value_1 = 12;
    var value_2 = 14;
}

console.log(value_1);
console.log(value_2);
