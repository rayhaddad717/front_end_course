const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }

};
setTimeout(() => { console.log('works') }, 3000);
setTimeout(person.fullName(), 4000);
// const exams = [80, 98, 92, 78, 77, 90, 84, 81, 89, 77];
//     if (max > current) { return max; }
//     else { return current; }
// });
// const test = exams.every(score => score >= 75);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const nb4 = numbers.filter((n) => {
//     return n === 4;
// });
// const doulbes = numbers.map(function (nb) {
//     return nb * 2;
// });
// function print(element) {
//     console.log(element);
// }

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand by Me',
//         score: 85
//     },
//     {
//         title: 'Alien',
//         score: 95
//     },
//     {
//         title: 'Sharknado',
//         score: 54
//     },
//     {
//         title: 'Waterworld',
//         score: 70
//     }
// ];
// const high = movies.filter(movie => (
//     movie.score > 80
// ));
// const titles = movies.map(function (movie) {
//     return movie.title;
// })
// movies.forEach(function (mov) {
//     console.log(`${mov.title} ${mov.score} / 100`);
// })

// const add = (x, y) => {
//     return x + y;
// }
// const square = (x) => {
//     return x ** 2;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// const isEven = num => (
//     num % 2 === 0
// );

// const add2 = (x, y) => (
//     x + y
// );
// const add3 = (x, y) => {
//     return x + y;
// }

// const newMovies = movies.map(function (movie) {
//     return `${movie.title}- ${movie.score / 10}`;
// })
// const newMovies2 = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`;
// })

// const newMovie1 = movies.map((movie) => (`${movie.title} - ${movie.score / 10}`));

// setTimeout(() => { console.log("YOu waited 3 seconds") }, 3000);
// // setInterval(() => { console.log(Math.random() * 10 + 1) }, 500);
// console.log("Hello world");

// let id = setInterval(() => { console.log(Math.random() * 10 + 1) }, 500);
// clearInterval(id);