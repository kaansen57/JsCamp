
import EmployeeValidator from "../crossCuttingConcerns/validation/employeeValidator.js";
import Employee from "../models/employee.js";
import EmployeeRepository from "../repository/employeeRepository.js";
import BaseLogger from "../crossCuttingConcerns/logger/baseLogger.js";
import EmployeeService from "../services/employeeService.js";
console.log("******* Employee *********");

let employee1 = new Employee(1,"eren","bozkurt",23,"sivas",5500);
let employeeService = new EmployeeService(new EmployeeRepository(), new EmployeeValidator(), new BaseLogger());

console.log(employeeService.add(employee1));
console.log(employeeService.getAll());

employee1 = new Employee(1,"eren","bozkurt",24,"Sivas",6000);
console.log(employeeService.update(employee1));

console.log(employeeService.getAllSorted("asc","salary"));