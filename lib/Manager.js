const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);
        // super(id);
        // super(email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }

}

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager