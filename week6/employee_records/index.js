let employees = [];
function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    employees.push(this);
}

Employee.prototype.printEmployeeForm = function () {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
};

new Employee("Jeff", "Senior Developer", "$80/hour");
new Employee("Jessica", "Junior Developer", "$35/hour");
new Employee("Janiel", "Junior Developer", "$20/hour", "Contract");

employees.forEach(employee => employee.printEmployeeForm());
