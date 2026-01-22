'use strict';

const employees = [
  { name: 'Rahul', dept: 'Engineering', salary: 75000, yearsExp: 3 },
  { name: 'Sneha', dept: 'Engineering', salary: 85000, yearsExp: 5 },
  { name: 'Vijay', dept: 'Sales', salary: 55000, yearsExp: 2 },
  { name: 'Anita', dept: 'Engineering', salary: 95000, yearsExp: 7 },
  { name: 'Karan', dept: 'Sales', salary: 60000, yearsExp: 4 },
  { name: 'Meera', dept: 'HR', salary: 50000, yearsExp: 3 },
  { name: 'Dev', dept: 'Engineering', salary: 70000, yearsExp: 2 },
];

const engineerNames = employees
  .filter(emp => emp.dept === 'Engineering')
  .slice()
  .sort((a, b) => b.salary - a.salary)
  .map(emp => emp.name);

console.log(engineerNames);
