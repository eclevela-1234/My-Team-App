const inquirer = require("inquirer");

function App() {
  this.isOver = false;
}

App.prototype.start = function () {
  console.log(`
    ==========================
    Welcome to My-Team-Builder
    ==========================
    `);
  // return

  while (App.isOver === false) {
        App.isOver = true;
    return inquirer
      .prompt([
        {
          type: "input",
          name: "Input",
          message: "Input something",
        },
        {
          type: "confirm",
          name: "isOver",
          message: "would you like to add another employee",
          default: true
        },
      ])
      .then((data) => {
        console.log(data.Input);
        console.log(data.isOver);
        App.isOver = data.isOver;
        console.log(App.isOver);
      });
  }
};

module.exports = App;
