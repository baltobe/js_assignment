const fruits = ['Saging', 'Ubas', 'Mangga', 'Dalandan', 1];

const first_fruit = fruits[0];
fruits[fruits.length - 1] = 'Bayabas';

console.log('First Fruit:', first_fruit);
fruits.forEach( fruit =>
{
    console.log(fruit);
})