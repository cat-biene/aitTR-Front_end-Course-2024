import { Product } from "./types/Product";
import { User } from "./types/User";

const products:Product[] = [
    {title: "велосипед", price: 2300, count: 12, discount: 15},
    {title: "ролики", price: 700, count: 5},
    {title: "самокат", price: 850, count: 0, discount: 5},
    {title: "лыжи", price: 1200, count: 7, discount: 10},
    {title: "коньки", price: 550, count: 2}
];

type ShortProduct = {title: string, price: number};

function getProductsWithRealPrice():ShortProduct[]{
    const result:ShortProduct[] = products.map((product:Product):ShortProduct => {
        const discount:number = product.discount === undefined ? 0 : product.discount;
        return {
                title: product.title,
                price:  product.price - discount / 100 * product.price
        }
    })
    return result
}
console.log(getProductsWithRealPrice());


function getProduct(title: string): Product | undefined{
    return products.find((product: Product): boolean => product.title === title);
}

console.log(getProduct('лыжи'));
console.log(getProduct('bike'));

function getProductWithZeroCount(): Product[]{
    return products.filter((product: Product): boolean => product.count === 0);
}

console.log(getProductWithZeroCount());
