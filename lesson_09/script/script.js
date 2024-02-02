/*const message = "word";
console.log(message[0]);

for (let i = 0; i < message.length; i++) {
    console.log(message[i]); 
}

let newMessage = "";
for (let i = message.length - 1; i >= 0; i--) {
    newMessage += message[i];
}
console.log(newMessage); */

// function declaration
function power(base, p){
    const result = base ** p;
    return result;
}

console.log(power(12, 2));
console.log(power(12, 3));
console.log(power(2, 10)); 

// function expresion
const sum = function(value1, value2){
    return value1 + value1;
}
console.log(sum(12, 43));

// arrow function

const length = message => message.length;

console.log(length("Hello world"));

function max(value1, value2){
    return value1 < value2 ? value2 : value1;
}
console.log(max(15, 65));

function mult(value1, value2, value3){
    return value1 * value2 * value3;
}
console.log(mult(14, 65, 85));

function avg(... args) {
    let sum = 0;
    for(const item of args) {
        sum += item;
    }
    return sum / args.length;
}

console.log(avg(12, 5, 85, 55, 2, 1));

function mult(...args){
    for(const item of args) {
        return  item * item * item; 
    }    
}
console.log(mult(14, 65, 85));

function max(...args) {
    let max = args[0];
    for(const item of args) {
       max = item < max ? max : item; 
    } 
    return max;   
}

console.log(max(12, 13, 52, 85, 321, 0, 9, 654));

function show(arr) {
    for(const item of arr) {
        console.log(item);
     } 
}

show([12, 65, 98, 32, 2, 5, 8,]);

function handler(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] >= 0 ? arr[i] : -arr[i];
     } 
     return arr;
}

const sourceArr = [12, 65, 98, 32, 2, 5, 8,];

console.log(handler(sourceArr));
 

