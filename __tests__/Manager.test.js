const Manager = require('../lib/Manager');


test('creates a new Manager', () => {
    const emp = new Manager('Eliot', 123);
    emp.editRecord(1, 'eliot@email.com')

    expect(emp.name).toBe('Eliot');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe("eliot@email.com");
    expect(emp.getRole()).toBe("Manager");
    expect(emp.getOffice()).toEqual(123);
})