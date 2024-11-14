// Step 1: Create a constructor function Person with properties name and age
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add a method introduce to Person.prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create a constructor function Employee that inherits from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to inherit name and age properties
    Person.call(this, name, age);
    this.jobTitle = jobTitle; // Add the jobTitle property specific to Employee
}

// Step 4: Ensure that Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Restore the constructor reference to Employee

// Step 5: Add a method work to Employee.prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Step 6: Demonstration

// 1. Create an instance of Person
let person = new Person("Sourav", 30);
person.introduce(); 

// 2. Create an instance of Employee
let employee = new Employee("Rohit", 25, "Software Engineer");

// 3. Call introduce on both instances
employee.introduce(); 
person.introduce();   

// 4. Call work on the Employee instance
employee.work(); // Output: "Bob is working as a Software Engineer."