//ToDo list
let command = prompt("What do you want to do?");
let todos = [];
let todo;
let deleteIndex;
while (command !== "quit") {
    switch (command) {
        case 'new': todo = prompt("Enter your new todo:");
            todos.push(todo);
            console.log(`${todo} added to the list`);
            break;
        case 'delete': deleteIndex = prompt("Enter the index you want to delete:");
            todos.splice(deleteIndex, 1);
            break;
        case 'list':
            console.log("***********************");
            for (let todo of todos) {
                console.log(todos.indexOf(todo) + " : " + todo);
            }
            console.log("***********************");

            break;
    }
    command = prompt("What do you want to do?");
}
console.log("Goodbye");
console.log(todos);

// let seating = [['ray', 'ralph', 'george'], ['fouad', 'layla', 'ahmad']];
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(seating[i][j]);
//     }

// }
// for (let row of seating) {
//     for (let col of row) {
//         console.log(col);
//     }
// }
// let i = 0;
// do {
//     console.log(i++);
// } while (i < 10);