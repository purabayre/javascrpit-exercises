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

// 1. Get array of just employee names
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);
// ['Rahul', 'Sneha', 'Vijay', 'Anita', 'Karan', 'Meera', 'Dev']

// 2. Get total salary expense for the company
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);
// 490000

// 3. Find all engineers earning more than 75000
const highPaidEngineers = employees.filter(
  emp => emp.dept === 'Engineering' && emp.salary > 75000,
);
console.log(highPaidEngineers);
// Sneha, Anita

// 4. Check if there's anyone with more than 10 years experience
const hasSeniorEmployee = employees.some(emp => emp.yearsExp > 10);
console.log(hasSeniorEmployee);
// false

// 5. Get average salary by department
const avgSalaryByDept = Object.fromEntries(
  Object.entries(
    employees.reduce((acc, emp) => {
      if (!acc[emp.dept]) {
        acc[emp.dept] = { total: 0, count: 0 };
      }
      acc[emp.dept].total += emp.salary;
      acc[emp.dept].count++;
      return acc;
    }, {}),
  ).map(([dept, data]) => [dept, data.total / data.count]),
);

console.log(avgSalaryByDept);
// { Engineering: 81250, Sales: 57500, HR: 50000 }

// 6. Find the highest paid employee
const highestPaidEmployee = employees.reduce((max, emp) =>
  emp.salary > max.salary ? emp : max,
);
console.log(highestPaidEmployee);
// Anita

// 7. Sort employees by years of experience (descending)
const sortedByExperience = [...employees].sort(
  (a, b) => b.yearsExp - a.yearsExp,
);
console.log(sortedByExperience);

// 8. Get employees grouped by department
const employeesByDept = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) acc[emp.dept] = [];
  acc[emp.dept].push(emp);
  return acc;
}, {});

console.log(employeesByDept);
