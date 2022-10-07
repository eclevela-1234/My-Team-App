const Intern = require('../lib/Intern');


test('creates a new Intern', () => {
    const emp = new Intern('Eliot', "University of Richmond");
    emp.editRecord(1, 'eliot@email.com')

    expect(emp.name).toBe('Eliot');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe("eliot@email.com");
    expect(emp.getRole()).toBe("Intern");
    expect(emp.getSchool()).toBe("University of Richmond");
})