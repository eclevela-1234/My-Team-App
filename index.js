// const inquirer = require("inquirer");

// const promptInfo = () => {
//     console.log(`
//     ==========================
//     Welcome to My-Team-Builder
//     ==========================
//     `);
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: "Input",
//             message: "Input something"
//         }
//     ])
//     .then(data => console.log(data.Input))
// }

// promptInfo();

// const App = require('./lib/app');

// new App().start();

const Employee =  require('./lib/Employee');
const Manager = require('./lib/Manager');

const bob = new Employee("Bob", 1, "bob@email.com");

const eliot = new Manager('Eliot', 123)

eliot.id = 1;
eliot.email = "eliot@email.com";

// bob.name = "Bob";
// bob.id = 1;
// bob.email = "bob@email.com";

// bob = new Employee;
console.log(bob);
console.log(eliot);
console.log(eliot.getRole());