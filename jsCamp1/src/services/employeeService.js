import BaseUserService from "./baseUserService.js";

export default class EmployeeService extends BaseUserService {
  constructor(userValidation) {
    super(userValidation);
    this.employees = [];
  }

  add(employee) {
    if (this.userValidation.checkEmptyFields(employee) && this.userValidation.getSalary(employee)) {
        console.log("employee eklendi");
      this.employees.push(employee);
    }
  }
  getById(id) {
      return this.employees.find(employee => employee.id === id );
  }
  getAll() {
    return this.employees;
  }
}
