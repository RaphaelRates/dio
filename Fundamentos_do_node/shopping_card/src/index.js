import { createItem } from "./services/item.js";
import * as cartService from "./services/cart.js";

const carts = [];

console.log("Welcome to the Shopping shit");

const [item1, item2] = await Promise.all([
    createItem("hot wheels falsificado", 10.00, 2),
    createItem("lapis", 1.00, 4)
]);


await Promise.all([cartService.addItem(carts,item1), cartService.addItem(carts,item2)]);


console.log(item1.subtotal());
console.log(await cartService.calcAllValue(carts));
cartService.removeItem(carts, item1);
console.log(carts);

