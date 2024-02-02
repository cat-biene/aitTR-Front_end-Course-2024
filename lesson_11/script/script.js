/*const user = {
    name: "John",
    lastName: "Smit",
    age: 31
}

console.log(user["name"]);
console.log(user.name);

user.salary = 3200;
console.log(user);

user.salary = 3500;
console.log(user);*/

const users = [
    {
        id: 1,
        name: "John",
        age: 31
    },
    {
        id: 2,
        name: "Ben",
        age: 32
    },
    {
        id: 3,
        name: "Shon",
        age: 35
    }
];

/*console.log(users);

for(const user of users) {
    console.log(user.name);
}

for(const user of users) {
    if(user.age > 33) {
        console.log(user.name);
    }   
}*/

/*users
.filter(elem => elem.age >33)
.forEach(elem => console.log(elem.name));*/

/*users
.filter(({age}) => age >33)
.forEach(({name}) => console.log(name));*/

/*users
.filter(({id}) => id % 2 === 0)
.forEach(({name}) => console.log(name));*/

/*const obj = {
    a: 12,
    b: 15,
    c: 21
};*/
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

//const {a, b} = obj;

//console.log(a);
//console.log(b);

/*function handler({a, b}) {
    // const {a, b} = obj;
    console.log(a, b);
}

handler(obj);*/

const products = [
    {
        name: "Ноутбук",
        price: 1200,
        brand: "Acer",
        inStock: true
    },
    {
        name: "Смартфон",
        price: 500,
        brand: "Samsung",
        inStock: false
    },
    {
        name: "Планшет",
        price: 300,
        brand: "Apple",
        inStock: true
    },
    {
        name: "Клавиатура",
        price: 50,
        brand: "Samsung",
        inStock: true
    }
];

const sum = products.reduce((acc, elem) => acc + elem.price, 0);
console.log(sum);

const min = products.reduce(
    (acc, {price}) => acc > price ? price : acc,
    products[0].price
);

console.log(min);



/*products
.filter(({inStock}) => inStock === true)
.forEach(products => console.log(products));

const result = products.filter(({inStock}) => inStock);
console.log(result);*/

/*products
.filter(({brand}) => brand === "Samsung")
.forEach(({name}) => console.log(name));

const result = products
.filter(({brand}) => brand === "Samsung")
.map(({name}) => name);
console.log(result);

const numbers = [12, 5, 3, 36, 4, 8];

// найти максимальное значение используя reduce

const sum = numbers.reduce((acc, elem) => acc +elem);
console.log(sum);

const mult = numbers.reduce((acc, elem) => acc * elem);
console.log(mult);

const maxNumber = numbers.reduce((max, current) => {
    return (current > max) ? current : max;
}, numbers[0]);
  
console.log(maxNumber);

const sum1 = numbers.reduce((acc, elem) => acc > elem ? acc : elem);
console.log(sum1);*/