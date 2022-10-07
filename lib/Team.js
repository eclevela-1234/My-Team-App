const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Team() {
  this.employees = [];
}

Team.prototype.Start = function () {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter a number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's id number",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter an id number!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "What is the Manager's email?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter an email address!");
            return false;
          }
        },
      },
    ])
    .then(({ name, officeNumber, id, email }) => {
      const emp = new Manager(name, officeNumber);
      emp.editRecord(id, email);
      this.employees.push(emp);
      this.buildTeam();
    });
};

Team.prototype.buildTeam = function () {
  console.log(this.employees);
};

module.exports = Team;
