// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Employee {
    constructor(name, id, email) {
        this.name=name;
        this.role="Employee";
        this.id=id;
        this.email=email;
    }
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;