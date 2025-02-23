// Task 1 - Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
    }
  
    // Method to return employee details
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  
    // Method to calculate annual salary
    calculateAnnualSalary() {
      return this.salary * 12; 
    }
  }
  
  // Test case
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  console.log(emp1.getDetails()); // Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000
  console.log(emp1.calculateAnnualSalary()); // 60000



// Task 2 - Manager Class with Inheritance

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
    }
  
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    calculateBonus() {
      return this.calculateAnnualSalary() * 0.1;
    }
  }
  
  // Test cases
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  console.log(mgr1.getDetails()); // Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5
  console.log(mgr1.calculateBonus()); // 9600



// Task 3 - Company Class

class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    listEmployees() {
      this.employees.forEach(employee => {
        console.log(employee.getDetails());
      });
    }
  }
  
  // Test cases
  const company = new Company("TechCorp");
  company.addEmployee(emp1);
  company.addEmployee(mgr1);
  company.listEmployees();
  // Expected output:
  // "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
  // "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"



// Task 4 - Implemented Payroll System
class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    listEmployees() {
      this.employees.forEach(employee => {
        console.log(employee.getDetails());
      });
    }
  
    calculateTotalPayroll() {
      return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
          return total + employee.calculateAnnualSalary() + employee.calculateBonus(); // Include bonus for managers
        } else {
          return total + employee.calculateAnnualSalary(); // Only salary for regular employees
        }
      }, 0);
    }
  }
  
  // Test the payroll calculation
  console.log(company.calculateTotalPayroll()); // Expected output: 165600 (emp1 + mgr1's salaries + bonus)

  


