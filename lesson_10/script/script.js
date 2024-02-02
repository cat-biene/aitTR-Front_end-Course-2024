/*function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function handler(callback) {
    // const handler = sub;
    console.log(callback(12, 5));
}

handler(sub);
handler(mult);*/

/*function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function handler(value, index, array) {
    const result = value ** 2;
    console.log(index, result);
}*/

/*const array = [1, 2, 3, 4, 5, 6, 7];
// forEach(array, handler);
// array.forEach(handler);
array.forEach(value, index, array => console.log(index, value ** 2, array));*/

// const arrays = ["bike", "car", "boat", "bus", "train", "airplane"];
//array.forEach(array => console.log(array));

// const numbers = [1, 2, -3, 4, -5, 6, -7];

/*for(const num of number){
    if(num < 0) {
        
    }
}*/
/*numbers.forEach(number => console.log(number < 0 ? -number : number));

arrays.forEach(array => {
    if(array.length > 5) {
        console.log(array);
    }
});

const result = array.map(number => number ** 2);
console.log(result); 

function map(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]), i, array);
    }
    return newArray;
}

const res = array.map(num => num ** 2);
console.log(res);

const array = [1, 2, 3, 4, 5, 6, 7];

function filter(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}
    

const resul = array.filter(array, num => num % 2 === 0);
console.log(resul);*/

/*const numbers = [1, 2, -3, 4, -5, 6, -7];

const res = numbers.filter(number => number > 0);
console.log(res);

const result = numbers.map(number => number < 0 ? - number : number);
console.log(result);*/

const numbers = [1, 2, -3, 4, -5, 6, -7];

/*const result = numbers.filter(num => num > 0);
const res = result.map(num => num ** 2);
console.log(res);*/

const result = numbers
    .filter(num => num > 0)
    .map(num => num ** 2);

console.log(result);

const arrays = ["bike", "car", "boat", "bus", "train", "airplane"];

const res = arrays
    .filter(word => word.length >5)
    .map(word => word + "!");

    console.log(res);
 



