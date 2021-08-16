// function rollDie(number = 4) {
//     return Math.floor(Math.random() * number) + 1
// }

// function sum() {
//     console.log(arguments);
// }
const scores = [929312, 899341, 888336, 772739, 543671, 243567, 111934];

const [gold, silver] = scores;

function sum(...numbers) {
    let sum = 0;
    for (let nb of numbers) {
        sum += nb;
    }
    return sum;
}

function objectSum(...numbers) {

}
const evenNumbers = [2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [...evenNumbers, ...oddNumbers];

const user = {
    firstName: 'Ray',
    lastName: 'Haddad'
};
const contactInfo = {
    phoneNumber: 71921387,
    city: 'Beirut'
};
const allInfo = { ...user, ...contactInfo, age: 20 };

const myArray = [1, 2, 3, 4, 5];
const [a1, a2, a3] = myArray;

const myObject = {
    name: 'Ray',
    lastName: 'Haddad'
};
const { name: FN, lastName: LN, age: Age = 5 } = myObject;

const fullName = ({ name, lastName }) => (`${name} - ${lastName}`);

const f1Drivers = ['seb', 'ham', 'nico', 'nor'];
f1Drivers.forEach(driver => { console.log(driver); });
const bestDrivers = f1Drivers.map(driver => {
    if (driver !== 'ham') { return driver; }
    else { return 'not you'; }
});

const fun = (p1, p2) => {
    console.log(p1, p2);
}
const isGood = f1Drivers.every((driver) => { return driver !== 'ham'; })
const result = f1Drivers.reduce((original, current) => {
    return current + original;
});