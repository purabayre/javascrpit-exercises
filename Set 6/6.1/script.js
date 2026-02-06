'use strict';

// Base class
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Employee extends Person
class Employee extends Person {
  constructor(name, email, employeeId, department, salary) {
    super(name, email);
    this.employeeId = employeeId;
    this.department = department;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} (${this.employeeId}) works in ${this.department} and earns ₹${this.salary}`;
  }

  giveRaise(percentage) {
    this.salary += (this.salary * percentage) / 100;
  }
}

// Manager extends Employee
class Manager extends Employee {
  constructor(name, email, employeeId, department, salary) {
    super(name, email, employeeId, department, salary);
    this.teamMembers = [];
  }

  addTeamMember(employee) {
    this.teamMembers.push(employee);
  }

  removeTeamMember(employeeId) {
    this.teamMembers = this.teamMembers.filter(
      member => member.employeeId !== employeeId
    );
  }

  getTeamSize() {
    return this.teamMembers.length;
  }
}

// Developer extends Employee
class Developer extends Employee {
  constructor(
    name,
    email,
    employeeId,
    department,
    salary,
    programmingLanguages = [],
    currentProject = null
  ) {
    super(name, email, employeeId, department, salary);
    this.programmingLanguages = programmingLanguages;
    this.currentProject = currentProject;
  }

  addSkill(language) {
    this.programmingLanguages.push(language);
  }

  assignProject(project) {
    this.currentProject = project;
  }
}
/////////////// 

// Developers
const dev1 = new Developer(
  'Aman',
  'aman@company.com',
  101,
  'Engineering',
  60000,
  ['JavaScript', 'Python']
);

const dev2 = new Developer(
  'Riya',
  'riya@company.com',
  102,
  'Engineering',
  65000,
  ['Java']
);

// Manager
const manager = new Manager(
  'Neha',
  'neha@company.com',
  201,
  'Engineering',
  90000
);

// Using inherited methods
console.log(dev1.getDetails());
dev1.giveRaise(10);
console.log('After raise:', dev1.salary);

// Manager managing team
manager.addTeamMember(dev1);
manager.addTeamMember(dev2);

console.log('Team size:', manager.getTeamSize());

// Developer-specific methods
dev1.addSkill('TypeScript');
dev1.assignProject('Time Tracking App');

console.log(dev1.programmingLanguages);
console.log(dev1.currentProject);

// Removing a team member
manager.removeTeamMember(101);
console.log('Team size after removal:', manager.getTeamSize());
