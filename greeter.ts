// Class;
class Student {
    fullName: string;
    constructor (public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// Interface;
interface Person {
    firstName: string;
    lastName: string;
}

// Type annotations;
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
