// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("ME");
// }
// const add = function (x, y) {
//     return x + y;
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(roll);
// callTwice(roll());   //WRONG THIS WILL RETURN THE VALUE OF THE ROLL 
//                     // FUNCTION (EX 5) AS ARGUMENT TO THE FUNCTION CALL

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!");
//             console.log("YOU WIN A MILLION DOLLARS!!");
//         }
//     }
//     else {
//         return function () {
//             alert("YOU HAVE BEEN INJECTED BY A COMPUTER VIRUS!");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }


// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     },
//     add(x, y) {
//         return x + y;
//     }
// }

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log(`${this.name} says MEOW`);
//     }
// }

try {
    hello.toUpperCase();
} catch {
    console.log("error");
}