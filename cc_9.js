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