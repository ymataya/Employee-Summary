// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, office) {
        this.name=name;
        this.role="Manager";
        this.id=id;
        this.email=email;
        this.officeNumber=office;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;