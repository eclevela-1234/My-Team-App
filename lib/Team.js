const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const templateData = require("../src/page-template");
const fs = require("fs");

function Team() {
  this.employees = [];
  this.endInput = false;
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
      const html = `<div class="col-4 my-3">
            <div class="card bg-light shadow-lg mx-auto" style="width: 16rem;">
              <div class="card-header bg-primary">
                <h2 class="text-light">${emp.getName()}</h2>
                <h3 class="text-light"><ion-icon name="cafe-outline"></ion-icon> ${emp.getRole()}</h3>
              </div>
              <div class="card m-3 ">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${emp.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${emp.getOffice()}</li>
                </ul>
              </div>
            </div>
          </div>`;
      this.employees.push(html);
      this.buildTeam();
    });
};

Team.prototype.buildTeam = function () {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: ["Add Engineer", "Add Intern", "Finish and Build Webpage"],
    })
    .then(({ action }) => {
      if (action === "Add Engineer") {
        inquirer
          .prompt([
            {
              type: "text",
              name: "name",
              message: "What is the Engineer's name?",
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
              name: "github",
              message: "What is their github?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a github!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is their id number",
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
              message: "What is their email?",
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
          .then(({ name, github, id, email }) => {
            const emp = new Engineer(name, github);
            emp.editRecord(id, email);
            // add functionality to build template literal and push into employee array
            const html = `<div class="col-4 my-3">
            <div class="card bg-light shadow-lg mx-auto" style="width: 16rem;">
              <div class="card-header bg-primary">
                <h2 class="text-light">${emp.getName()}</h2>
                <h3 class="text-light"><ion-icon name="glasses-outline"></ion-icon> ${emp.getRole()}</h3>
              </div>
              <div class="card m-3 ">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${emp.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="http://www.github.com/${emp.getGithub()}">${emp.getGithub()}</a></li>
                </ul>
              </div>
            </div>
          </div>`;
            this.employees.push(html);
            this.buildTeam();
          });
      } else if (action === "Add Intern") {
        inquirer
          .prompt([
            {
              type: "text",
              name: "name",
              message: "What is the Intern's name?",
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
              name: "school",
              message: "What university did they attend?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a school!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is their id number",
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
              message: "What is their email?",
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
          .then(({ name, school, id, email }) => {
            const emp = new Intern(name, school);
            emp.editRecord(id, email);
            const html = `<div class="col-4 my-3">
               <div class="card bg-light shadow-lg mx-auto" style="width: 16rem;">
                 <div class="card-header bg-primary">
                   <h2 class="text-light">${emp.getName()}</h2>
                   <h3 class="text-light"><ion-icon name="school-outline"></ion-icon> ${emp.getRole()}</h3>
                 </div>
                 <div class="card m-3 ">
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${emp.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                     <li class="list-group-item">School: ${emp.getSchool()}</li>
                   </ul>
                 </div>
               </div>
             </div>`;

            this.employees.push(html);
            this.buildTeam();
          });
      } else {
        this.buildPage();
      }
    });
};

Team.prototype.buildPage = function () {
  const html = templateData(this.employees);
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", html, (err) => {
      //if there's an error, reject the promise and send the error to the promise's catch method
      if (err) {
        reject(err);
        // return out of the function here to make sur the promise doesn't axxidentally execute the resolve() function.
        return;
      }
      // if everything went well, resolve the promise and send the successful data to the .then method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

module.exports = Team;
