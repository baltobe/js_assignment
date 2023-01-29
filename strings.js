const fullName = (firstName, lastName) => {
    return (firstName + ' ' + lastName).toUpperCase();
}

console.log(fullName('Robert', 'Segui'));
console.log(fullName('Segui', 'Robert'));

const personFullName = {
    firstName: 'Robert',
    lastName : 'Segui'
};

const fullNameRefactored = ({firstName, lastName}) => { return (firstName + ' ' + lastName).toUpperCase(); }

console.log(fullNameRefactored(personFullName));