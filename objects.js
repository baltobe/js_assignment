const car = {
    make: "Lorem",
    model: "dolor sit amet",
    year: 2023,
    colors: ["Red", "Green", "Blue"],
    hybrid: false,
    
        drive: () => {
            return 'Motorbike start';
        },

        stop: () => {
            return 'Motorbike Stop';
        }
};

console.log(car.make);
console.log(car.colors[0]);

console.log(car.drive());
console.log(car.stop());

