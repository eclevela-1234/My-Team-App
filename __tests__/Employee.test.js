const Employee = require("../lib/Employee");

test('creates a new employee', () => {
    const emp = new Employee("Eliot", 1, "eliot@email.com");

    expect(emp.name).toBe('Eliot');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe("eliot@email.com");
    expect(emp.getRole()).toBe("Employee");
})