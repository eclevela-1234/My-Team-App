const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return "Manager"
    }

}

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager