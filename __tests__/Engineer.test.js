const Engineer = require('../lib/Engineer');


test('creates a new Engineer', () => {
    const emp = new Engineer('Eliot', "eclevela-1234");
    emp.editRecord(1, 'eliot@email.com')

    expect(emp.name).toBe('Eliot');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe("eliot@email.com");
    expect(emp.getRole()).toBe("Engineer");
    expect(emp.getGithub()).toBe("eclevela-1234");
})