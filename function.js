function calculateTotal(subTotal, tax){
    return subTotal + tax;
}

const order1 =  345, order2 = 214, order3 = 456;
const tax = 0.05;

console.log(`Order1
Sub-Total: ${order1}
Tax: ${order1 * tax}
Final Total: ${calculateTotal(order1, order1 * tax)}\n`);

console.log(`Order2
Sub-Total: ${order2}
Tax: ${order2 * tax}
Final Total: ${calculateTotal(order2, order2 * tax)}\n`);

console.log(`Order3
Sub-Total: ${order3}
Tax: ${order3 * tax}
Final Total: ${calculateTotal(order3, order3 * tax)}\n`);