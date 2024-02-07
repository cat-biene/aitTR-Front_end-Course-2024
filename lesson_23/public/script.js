const products = [
    { title: "велосипед", price: 2300, count: 12, discount: 15 },
    { title: "ролики", price: 700, count: 5 },
    { title: "самокат", price: 850, count: 0, discount: 5 },
    { title: "лыжи", price: 1200, count: 7, discount: 10 },
    { title: "коньки", price: 550, count: 2 }
];
function getProductsWithRealPrice() {
    const result = products.map((product) => {
        const discount = product.discount === undefined ? 0 : product.discount;
        return {
            title: product.title,
            price: product.price - discount / 100 * product.price
        };
    });
    return result;
}
console.log(getProductsWithRealPrice());
function getProduct(title) {
    return products.find((product) => product.title === title);
}
console.log(getProduct('лыжи'));
console.log(getProduct('bike'));
function getProductWithZeroCount() {
    return products.filter((product) => product.count === 0);
}
console.log(getProductWithZeroCount());
export {};
