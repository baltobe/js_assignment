const score1 = 40, score2 = 76, score3 = 69;
let total_score = score1 + score2 + score3,
    average = total_score / 3;

console.log(total_score, Math.round(average * 100) / 100);

let plates = 20,
    people = 7,
    remaining_plates = plates - people;
remaining_plates++;

let message = `There are ${remaining_plates} plates available`;
console.log(message);