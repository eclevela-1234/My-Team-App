const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, github) {
    super(name);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

Engineer.prototype = Object.create(Employee.prototype);

module.exports = Engineer;
