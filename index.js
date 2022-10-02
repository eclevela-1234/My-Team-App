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

const App = require('./lib/app');

new App().start();