const Manager = require('../lib/Manager');


test('creates a new employee', () => {
    const emp = new Manager(jest.mock('../lib/Manager'));

    expect(emp.name).toBe('Eliot');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe("eliot@email.com");
    expect(emp.getRole()).toBe("Employee");
})