class Person {
    name;
    age;
    status;
}

let person1 = new Person();
person1.name = 'wag kalang mawa laaa';
person1.age = 13;
person1.status = 'resident';

let person2 = new Person();
person2.name = 'Jopay';
person2.age = 31;
person2.status = 'resident';

if (person1.age > 18 && person1.status == 'resident')
    console.log(`${person1.name} you are allowed to vote!`);

else console.log(`${person1.name} you are not allowed to vote!`);

if (person2.age > 18 && person2.status == 'resident')
    console.log(`${person2.name} you are allowed to vote!`);

else console.log(`${person2.name} you are not allowed to vote!`);